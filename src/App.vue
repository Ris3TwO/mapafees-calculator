<template>
  <main>
    <CalculatorView />
  </main>
</template>

<script setup>
/**
 * App.vue
 *
 * Root component of the Vue application.
 * It acts as the main container and entry point for rendering the calculator view.
 * Applies global layout styles and background for the app shell.
 *
 * Components:
 * - CalculatorView: The primary interface that renders the calculator UI.
 */

import CalculatorView from '@/views/CalculatorView.vue';
</script>

<style scoped>
/**
 * Styles for the app layout:
 * - Full-screen height adjustment with padding.
 * - Background pattern and centering of main content.
 */

main {
  background: #c3c7cf url(/img/bg0.webp) repeat center center;
  width: 100%;
  min-height: 100%;
  padding: 30px 15px 100px;
  height: calc(100vh - 108px);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
