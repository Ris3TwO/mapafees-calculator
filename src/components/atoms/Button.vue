<template>
  <button
    :class="[
      'px-4 md:px-6 py-2 rounded-full text-white font-medium transition-all duration-200 uppercase tracking-wider text-sm',
      disabled
        ? 'bg-gray-400 cursor-not-allowed'
        : 'bg-blue-500 hover:bg-blue-600 cursor-pointer',
    ]"
    :type="type"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup>
/**
 * Button.vue
 *
 * Custom styled button component with conditional styling based on the `disabled` state.
 *
 * Props:
 * @prop {String} type - The button's HTML `type` attribute (default: "button").
 * @prop {Boolean} disabled - Whether the button is disabled (default: false).
 *
 * Emits:
 * - No events, purely visual and functional.
 *
 * Behavior:
 * - Applies a different background color and disables hover effects when `disabled` is true.
 * - On hover, the button background color changes (from blue to a darker blue).
 * - When `disabled` is true, the button's appearance reflects a disabled state (gray background and no pointer cursor).
 */

// Props definition
const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
