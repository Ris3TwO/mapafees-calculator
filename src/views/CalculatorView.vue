<template>
  <section class="calculator-container rounded-xs">
    <CalculatorBox />
  </section>
</template>

<script setup>
/**
 * CalculatorView.vue
 *
 * Primary view that renders the full calculator box in a styled container.
 * This is the core page of the application where users interact with the estimator.
 *
 * Components:
 * - CalculatorBox: Main interface composed of form inputs, selections, and results.
 */

import CalculatorBox from '@/components/organisms/CalculatorBox.vue';
</script>

<style scoped>
/**
 * Styles for the calculator container:
 * - Centers content with a max-width constraint.
 * - Applies padding and background for a clean card appearance.
 */
.calculator-container {
  text-align: center;
  width: 100%;
  max-width: 800px;
  margin: auto;
  background: #fff;
  padding-bottom: 30px;
}
</style>
