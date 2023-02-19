<script setup lang="ts">
import Recipe from './components/Recipe.vue';
import PromptForm from './components/PromptForm.vue';
</script>

<template>
  <div class="grid grid-cols-12 gap-4 h-full py-8">
    <section class="border shadow rounded-md w-full col-start-2 col-span-2 p-8">
      <header class="pb-8 text-2xl text-neutral-800 font-bold">Lunch advisor!</header>
      <PromptForm />
    </section>
    <main class="border shadow rounded-md w-full col-end-12 col-span-8 p-8">
      <Recipe />
    </main>
  </div>
</template>
