<template>
  <div class="relative">
    <TextInput
      :label="label"
      :type="type"
      v-model="internalValue"
      class="pr-10"
      :placeholder="placeholder"
    />
    <button
      v-if="internalValue"
      @click="clear"
      type="button"
      class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition text-sm"
    >
      ✕
    </button>
  </div>
</template>

<script setup>
/**
 * InputWithClear.vue
 *
 * Molecule component that wraps a basic TextInput and adds a clear ("✕") button
 * to quickly reset the input value. Ideal for use in forms with editable fields.
 *
 * Props:
 * @prop {String|Number} modelValue - Bound value from parent (v-model)
 * @prop {String} label - Label text for the input
 * @prop {String} type - Input type (text, number, etc.)
 * @prop {String} placeholder - Placeholder text for the input
 *
 * Emits:
 * @event update:modelValue - Emits new value when cleared or changed
 *
 * Behavior:
 * - Shows clear button only when input has value
 * - Emits updates when internal value changes
 */

import { ref, watch } from 'vue';
import TextInput from '@/components/atoms/TextInput.vue';

// Props definition
const props = defineProps({
  modelValue: [String, Number],
  label: String,
  type: {
    type: String,
    default: 'text',
  },
  placeholder: String,
});

// Emit binding to parent component
const emit = defineEmits(['update:modelValue']);

// Local reactive value that syncs with parent
const internalValue = ref(props.modelValue);

// Watch for user changes and sync with parent
watch(internalValue, (val) => {
  emit('update:modelValue', val);
});

// Watch for external prop changes and update local value
watch(
  () => props.modelValue,
  (val) => {
    internalValue.value = val;
  },
);

// Clears the input value
const clear = () => {
  internalValue.value = '';
};
</script>
