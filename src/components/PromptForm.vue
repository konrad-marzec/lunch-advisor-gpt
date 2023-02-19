<script setup lang="ts">
import { usePromptStore } from '@/stores/prompt.store';
import { CUISINE } from '@/constants/location.constants';
import { PREPARATION_TIME } from '@/constants/time.constants';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
import { useRecipeStore } from '@/stores/recipe.store';

const promptStore = usePromptStore();
const recipeStore = useRecipeStore();

const { cuisine, preparationTime } = storeToRefs(promptStore);
const { loading } = storeToRefs(recipeStore);

watch([cuisine, preparationTime], () => {
  if (!cuisine.value || !preparationTime.value) {
    return;
  }

  recipeStore.loadRecipe(cuisine.value, preparationTime.value);
});
</script>

<template>
  <label for="cuisine" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cuisine</label>
  <select
    v-model="cuisine"
    id="cuisine"
    :disabled="loading"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option v-for="item in CUISINE" :key="item">
      {{ item }}
    </option>
  </select>

  <label for="preparation-time" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-8">
    Preparation time
  </label>
  <select
    :disabled="loading"
    v-model="preparationTime"
    id="preparation-time"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option v-for="item in PREPARATION_TIME" :key="item">
      {{ item }}
    </option>
  </select>
</template>
