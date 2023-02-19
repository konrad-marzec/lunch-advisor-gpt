<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps(['modelValue', 'disabled', 'options', 'id']);
const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
</script>

<template>
  <select
    :id="props.id"
    v-model="value"
    :disabled="props.disabled"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option v-for="item in props.options" :key="item">
      {{ item }}
    </option>
  </select>
</template>
