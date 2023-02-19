<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe.store';
import { storeToRefs } from 'pinia';

const store = useRecipeStore();

const { html, loading } = storeToRefs(store);
</script>

<template>
  <div v-if="!loading && html" v-html="html"></div>
  <div v-if="loading" role="status" class="space-y-2.5 animate-pulse">
    <div class="flex items-center w-full space-x-2 max-w-[480px]">
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
    </div>
    <div class="flex items-center w-full space-x-2 max-w-[480px]">
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
    </div>
    <div class="flex items-center w-full space-x-2 max-w-[330px] mb-10">
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
    </div>

    <div class="flex items-center w-full space-x-2">
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
    </div>
    <div class="flex items-center w-full space-x-2 max-w-6xl">
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
    </div>
    <div class="flex items-center w-full space-x-2 max-w-5xl">
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
    </div>
    <div class="flex items-center w-full space-x-2 max-w-6xl">
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-600 w-24"></div>
    </div>
    <div class="flex items-center w-full space-x-2">
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
    </div>
    <div class="flex items-center w-full space-x-2 max-w-6xl">
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
    </div>
    <div class="flex items-center w-full space-x-2">
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-600 w-full"></div>
    </div>
    <div class="flex items-center w-full space-x-2 max-w-3xl">
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
    </div>
  </div>
  <div v-if="!loading && !html" class="flex items-center w-full h-full justify-center text-2xl text-neutral-800">
    Please select your favorite cuisine and coking time.
  </div>
</template>
