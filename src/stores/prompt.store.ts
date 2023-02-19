import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePromptStore = defineStore('counter', () => {
  const cuisine = ref('');
  const preparationTime = ref('');

  return { cuisine, preparationTime };
});
