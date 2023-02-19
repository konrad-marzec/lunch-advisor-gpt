<script setup lang="ts">
import { usePromptStore } from '@/stores/prompt.store';
import { CUISINE } from '@/constants/location.constants';
import { PREPARATION_TIME } from '@/constants/time.constants';
import { storeToRefs } from 'pinia';
import { useRecipeStore } from '@/stores/recipe.store';

const promptStore = usePromptStore();
const recipeStore = useRecipeStore();

const { cuisine, preparationTime, vegetarian } = storeToRefs(promptStore);
const { loading } = storeToRefs(recipeStore);

const submit = (e: Event) => {
  e.preventDefault();

  recipeStore.loadRecipe(cuisine.value, preparationTime.value, vegetarian.value);
};
</script>

<template>
  <form v-on:submit="submit">
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
    <label class="relative inline-flex items-center cursor-pointer mt-8">
      <input :disabled="loading" type="checkbox" v-model="vegetarian" class="sr-only peer" />
      <div
        class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
      ></div>
      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Vegetarian</span>
    </label>
    <button
      type="submit"
      :disabled="loading"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 w-full"
    >
      Submit
    </button>
  </form>
</template>
