<template>
  <form @submit.prevent="submit" class="flex flex-col gap-6">
    <div>
      <label class="block font-semibold text-base mb-2" for=""
        >Tipo de vehículo</label
      >
      <div class="flex justify-center gap-3">
        <button
          type="button"
          @click="vehicle = 'light'"
          :class="[
            'flex items-center gap-2 px-4 md:px-6 py-2 rounded-full border shadow-sm font-medium transition',
            vehicle === 'light'
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-gray-800 border-gray-300',
          ]"
        >
          <Car
            class="w-5 h-5"
            :class="vehicle === 'light' ? 'text-white' : 'text-gray-700'"
          />
          Liviano
        </button>
        <button
          type="button"
          @click="vehicle = 'heavy'"
          :class="[
            'flex items-center gap-2 px-4 md:px-6 py-2 rounded-full border shadow-sm font-medium transition',
            vehicle === 'heavy'
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-gray-800 border-gray-300',
          ]"
        >
          <Truck
            class="w-5 h-5"
            :class="vehicle === 'heavy' ? 'text-white' : 'text-gray-700'"
          />
          Pesado
        </button>
      </div>
    </div>

    <InputWithClear
      label="Monto *"
      placeholder="9,999.99"
      v-model="amount"
      type="number"
    />

    <Checkbox label="¿Pago con retraso?" v-model="latePayment" v-show="false" />

    <div class="div">
      <Button type="submit" :disabled="isDisabled">Estimar</Button>
    </div>
  </form>
</template>

<script setup>
/**
 * CalculatorInput.vue
 *
 * This component is an interactive form that lets users:
 * - Select the vehicle type (light or heavy)
 * - Enter a bid amount with a clear button
 * - Optionally include a late payment (hidden by default)
 *
 * Emits:
 * @event calculate - Triggered on form submit with params: amount, latePayment, vehicleType
 */

import { ref, computed } from 'vue';
import { Car, Truck } from 'lucide-vue-next';

// Atoms
import Button from '@/components/atoms/Button.vue';
import Checkbox from '@/components/atoms/Checkbox.vue';

// Molecules
import InputWithClear from '@/components/molecules/InputWithClear.vue';

// Emits the result to parent (amount, latePayment, vehicle)
const emit = defineEmits(['calculate']);

const amount = ref(null); // User-entered bid value
const latePayment = ref(false); // Late payment flag
const vehicle = ref('light'); // Vehicle type: 'light' | 'heavy'

/**
 * Handles form submission and emits the calculated values
 */
const submit = () => {
  emit('calculate', amount.value, latePayment.value, vehicle.value);
};

/**
 * Computed state to disable the submit button if input is invalid
 * @returns {boolean} True if value is empty or invalid
 */
const isDisabled = computed(() => {
  const parsed = parseFloat(amount.value);
  return isNaN(parsed) || parsed <= 0;
});
</script>
