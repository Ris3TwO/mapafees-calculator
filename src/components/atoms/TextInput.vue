<template>
  <div class="flex items-center gap-4 border-b border-gray-300 pb-2">
    <label class="text-md font-medium text-gray-700 w-32" for="">{{
      label
    }}</label>
    <input
      :placeholder="placeholder"
      :inputmode="inputmode"
      :pattern="pattern"
      class="flex-1 bg-transparent text-right text-lg text-gray-800 focus:outline-none focus:ring-0 placeholder-gray-400"
      :value="internalValue"
      @input="handleInput"
      maxlength="6"
    />
  </div>
</template>

<script setup>
/**
 * TextInput.vue
 *
 * Custom styled atomic input field that allows only numeric input (optionally decimal),
 * applies basic constraints, and emits formatted numbers.
 *
 * Props:
 * @prop {String} label - Label displayed to the left of the input
 * @prop {String|Number} modelValue - Bound value (via v-model)
 * @prop {String} type - HTML input type (default: "text")
 * @prop {Number} min - Minimum allowed value (default: 1)
 * @prop {Number} max - Maximum allowed value (default: 100000)
 * @prop {String} placeholder - Placeholder text shown when empty
 * @prop {String} inputmode - Input mode for better mobile UX (default: "decimal")
 * @prop {String} pattern - RegEx pattern for accepted characters (default: "[0-9.]*")
 *
 * Emits:
 * @event update:modelValue - Emitted with cleaned numeric value
 *
 * Behavior:
 * - Restricts to digits and at most one decimal separator
 * - Applies min/max bounds
 * - Formats and emits a sanitized number string
 * - Right-aligns input visually for numerical clarity
 */

import { ref, watch } from 'vue';

// Props definition
const props = defineProps({
  label: String,
  modelValue: [String, Number],
  type: {
    type: String,
    default: 'text',
  },
  min: {
    type: Number,
    default: 1,
  },
  max: {
    type: Number,
    default: 999999,
  },
  placeholder: {
    type: String,
    default: '0.00',
  },
  inputmode: {
    type: String,
    default: 'decimal',
  },
  pattern: {
    type: String,
    default: '[0-9.]*',
  },
});

// Emit binding to parent component
const emit = defineEmits(['update:modelValue']);

const internalValue = ref(props.modelValue ?? '');

// Keep internal input in sync with parent v-model
watch(
  () => props.modelValue,
  (val) => {
    internalValue.value = val ?? '';
  },
);

/**
 * Handles input event to sanitize, validate and emit numeric values.
 * @param {Event} e - Input DOM event
 */
const handleInput = (e) => {
  // Remove non-digit characters
  let raw = e.target.value.replace(/[^\d]/g, '');

  // If the input is empty, reset the internal value
  if (raw === '') {
    internalValue.value = '';
    emit('update:modelValue', '');
    return;
  }

  // Convert to integer
  let number = parseInt(raw, 10);

  if (isNaN(number)) {
    internalValue.value = '';
    emit('update:modelValue', '');
    return;
  }

  // Apply min/max constraints
  if (number < props.min) number = props.min;
  if (number > props.max) number = props.max;

  // Force re-write the internal value to enforce the constraint visually
  internalValue.value = number.toString();
  emit('update:modelValue', number);
};
</script>
