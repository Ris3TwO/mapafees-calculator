<template>
  <div class="space-y-2">
    <h2 class="text-2xl font-semibold text-gray-900 mb-2 text-left">
      Desglose de costes
    </h2>

    <div
      v-for="(val, key, index) in feeMap"
      :key="key"
      :class="[
        'flex justify-between py-2 text-md md:text-sm',
        index === 0 ? 'border-y border-gray-300' : 'border-b border-gray-200',
      ]"
    >
      <span class="text-gray-600">{{ keyLabels[key] }}:</span>
      <span class="text-gray-900 font-medium">{{ formatCurrency(val) }}</span>
    </div>
  </div>
</template>

<script setup>
/**
 * CalculatorResult.vue
 *
 * Displays a breakdown of the bid estimate based on all calculated fees.
 * The `result` prop should contain all fee components and total.
 *
 * Props:
 * @prop {Object} result - The full breakdown of the estimate calculation.
 * Expected shape:
 * {
 *   amount: number,
 *   buyerFee: number,
 *   internetFee: number,
 *   gateFee: number,
 *   envFee: number,
 *   titleFee: number,
 *   brokerFee: number,
 *   lateFee?: number,
 *   total: number
 * }
 */

import { computed } from 'vue';

// Props definition
const props = defineProps({
  result: Object,
});

/**
 * A label map to show friendly names for each fee type.
 * Keys match the result object properties.
 */
const keyLabels = {
  amount: 'Bid Amount',
  buyerFee: 'Buyer Fee',
  internetFee: 'Internet Bid Fee',
  gateFee: 'Gate Fee',
  envFee: 'Environmental Fee',
  titleFee: 'Title Mailing Fee',
  brokerFee: 'Mapa Broker Fee',
  lateFee: 'Recargo por retraso',
};

/**
 * Filters the result object to exclude the total and return the individual fees only.
 * @returns {Object} A shallow copy of the result without the 'total' key.
 */
const feeMap = computed(() => {
  const map = { ...props.result };
  delete map.total;
  return map;
});

/**
 * Formats a numeric value as a USD currency string.
 *
 * @param {number} value - Numeric value to format
 * @returns {string} USD formatted string (e.g. "$1,250.00")
 */
const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};
</script>
