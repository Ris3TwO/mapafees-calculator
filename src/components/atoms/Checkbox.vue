<template>
  <label :class="['flex items-center gap-2 cursor-pointer', labelClass]">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      :class="['transform scale-110', checkboxClass]"
    />
    <span :class="textClass">{{ label }}</span>
  </label>
</template>

<script setup>
/**
 * Checkbox.vue
 *
 * A custom styled checkbox component that allows two-way binding using v-model and supports customizable Tailwind CSS classes.
 *
 * Props:
 * @prop {String} label - The label text displayed next to the checkbox.
 * @prop {Boolean} modelValue - The checked state of the checkbox (bound via v-model).
 * @prop {String} labelClass - Custom Tailwind CSS classes for the label element (default: "").
 * @prop {String} checkboxClass - Custom Tailwind CSS classes for the checkbox element (default: "").
 * @prop {String} textClass - Custom Tailwind CSS classes for the label text (default: "text-gray-700").
 *
 * Emits:
 * @event update:modelValue - Emitted when the checkbox value changes (checked/unchecked).
 *
 * Behavior:
 * - Allows users to check or uncheck the checkbox.
 * - Updates the parent component with the new checked state via v-model.
 * - Displays a label next to the checkbox to describe its purpose.
 * - Supports custom styling via Tailwind CSS classes.
 */

// Props definition
const props = defineProps({
  label: String,
  modelValue: Boolean,
  labelClass: {
    type: String,
    default: '',
  },
  checkboxClass: {
    type: String,
    default: '',
  },
  textClass: {
    type: String,
    default: 'text-gray-700',
  },
});
</script>
