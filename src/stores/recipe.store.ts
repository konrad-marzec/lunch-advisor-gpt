import { marked } from 'marked';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

const SECRET_API_KEY = '';
const MODEL = 'text-davinci-003';

export const useRecipeStore = defineStore('recipe', () => {
  const recipe = ref('');
  const loading = ref(false);
  const hasError = ref(false);

  async function loadRecipe(cuisine: string, prepTime: string) {
    loading.value = true;
    hasError.value = false;

    const prompt = `Give me an random idea and recipe for dinner. I would like to eat ${cuisine} cuisine. Preparation time should be around ${prepTime}. Please return markdown format`;

    try {
      const response = await (
        await fetch('https://api.openai.com/v1/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${SECRET_API_KEY}`,
          },
          body: JSON.stringify({
            max_tokens: 300,
            temperature: 1,
            model: MODEL,
            prompt,
          }),
        })
      ).json();

      recipe.value = response.choices[0].text;
    } catch (error) {
      hasError.value = true;
    } finally {
      loading.value = false;
    }
  }

  const html = computed(() => marked(recipe.value));

  return { recipe, html, loading, hasError, loadRecipe };
});
