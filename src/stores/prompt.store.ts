import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePromptStore = defineStore('counter', () => {
  const cuisine = ref('');
  const vegetarian = ref(true);
  const preparationTime = ref('');

  return { cuisine, preparationTime, vegetarian };
});
