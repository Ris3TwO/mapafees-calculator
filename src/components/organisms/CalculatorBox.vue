<template>
  <div class="flex flex-col items-center gap-4 px-10">
    <div class="flex justify-center w-full">
      <button
        class="px-6 py-3 font-normal uppercase tracking-wide text-sm border-b-2 transition-colors duration-300 w-full"
        :class="
          title === 'salvage'
            ? 'text-blue-600 border-blue-600'
            : 'text-gray-400 border-gray-300 hover:text-blue-500'
        "
        @click="title = 'salvage'"
      >
        Título salvage
      </button>
      <button
        class="px-6 py-3 font-normal uppercase tracking-wide text-sm border-b-2 transition-colors duration-300 w-full"
        :class="
          title === 'clean'
            ? 'text-blue-600 border-blue-600'
            : 'text-gray-400 border-gray-300 hover:text-blue-500 '
        "
        @click="title = 'clean'"
      >
        Título limpio
      </button>
    </div>
  </div>
  <div class="flex flex-col items-center gap-4">
    <section
      class="w-full max-w-6xl rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <!-- Columna izquierda -->
      <div class="space-y-4 md:space-y-8">
        <CalculatorInput @calculate="handleCalculation" />
        <CalculatorEstimate v-if="result" :totalAmount="result.total" />
      </div>

      <!-- Columna derecha -->
      <div>
        <CalculatorResult v-if="result" :result="result" />
      </div>
    </section>
  </div>
</template>

<script setup>
/**
 * CalculatorBox.vue
 *
 * This is the main container component responsible for handling user input and
 * displaying the full breakdown of calculated vehicle auction costs.
 *
 * Features:
 * - Title selection (salvage or clean)
 * - Vehicle type and amount entry (delegated to CalculatorInput)
 * - Fee breakdown and total estimate display
 *
 * Components:
 * - CalculatorInput: Form for entering amount, vehicle type, etc.
 * - CalculatorEstimate: Summary box with total cost
 * - CalculatorResult: Detailed breakdown of all fees
 */

import { ref } from 'vue';
import { useCopartCalculator } from '@/composables/useCopartCalculator';

// Organisms
import CalculatorInput from '@/components/organisms/CalculatorInput.vue';
import CalculatorResult from '@/components/organisms/CalculatorResult.vue';
import CalculatorEstimate from '@/components/molecules/CalculatorEstimate.vue';

// Fee calculation logic composable
const { calculateTotal } = useCopartCalculator();

// State
const result = ref(null);
const title = ref('salvage');

/**
 * Handles calculation trigger from child input component.
 *
 * @param {number} amount - User-entered bid amount
 * @param {boolean} latePayment - Whether late payment applies
 * @param {'light' | 'heavy'} vehicleType - Selected vehicle type
 */
const handleCalculation = (amount, latePayment, vehicleType) => {
  result.value = calculateTotal(amount, {
    latePayment,
    titleType: title.value,
    vehicleType,
  });
};
</script>
