<template>
  <div class="w-full shadow-md p-4">
    <h3 class="text-center text-gray-400 text-sm">Estimación total</h3>
    <p class="text-2xl text-center font-semibold text-gray-800">
      {{ formattedTotal }}
    </p>
    <p class="text-xs text-center text-gray-400 mt-2">
      * Monto estimado, no representa el valor final.
    </p>
  </div>
</template>

<script setup>
/**
 * CalculatorEstimate.vue
 *
 * A visual-only component that presents the total estimate calculated by the app.
 * It receives a numeric total value and renders it in a styled block with clear formatting.
 *
 * Props:
 * @prop {number} totalAmount - The final calculated total to display (USD).
 *
 * Behavior:
 * - Receives a number via props and displays it formatted as USD currency.
 * - Styling and layout are handled using Tailwind CSS.
 * - Localization format is set to "es-CO" for Colombian number conventions.
 *
 * Example usage:
 * <CalculatorEstimate :totalAmount="result.total" />
 */

import { computed } from 'vue';

// Props definition
const props = defineProps({
  totalAmount: {
    type: Number,
    required: true,
  },
});

/**
 * Formats the given totalAmount into a USD string using Colombian locale.
 *
 * @returns {string} - Formatted currency string, e.g., "$3,500.00"
 */
const formattedTotal = computed(() =>
  new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(props.totalAmount),
);
</script>
