# MapaFees Calculator — Vue 3 + Vite

This project is a modern, modular implementation of a fee calculator for COPART vehicle bids. It uses **Vue 3 + Vite**, with the `<script setup>` syntax and a component architecture based on atomic design principles (atoms, molecules, organisms).

## 🚀 Features

- 🔥 Vite for fast development and build
- ⚙️ Modular logic for fees based on title and vehicle type
- 🎨 Tailwind CSS 4
- 🧠 Composition API for fee calculations
- 🧩 Componentized UI (atoms, molecules, organisms)
- 📦 Built-in support for Lucide icons

## 📦 Installation

```bash
git clone https://github.com/Ris3TwO/mapafees-calculator.git
cd mapafees-calculator
npm install
```

## 🛠️ Development

```bash
npm run dev
```

## 🏗️ Build for Production

```bash
npm run build
```

## ✨ Code Formatting

To format the code according to the Prettier configuration, run:

```bash
npm run format
```

This will format all files in the project using Prettier according to the configuration set in `.prettierrc`. You can run this command anytime to ensure consistent code formatting across the project.

## 📚 Project Structure

```bash
src/
 ├── assets/                # Images, logos, etc.
 ├── components/
 │   ├── atoms/             # Basic UI units (inputs, labels, buttons)
 │   ├── molecules/         # Composed from atoms (inputs with clear, card results)
 │   └── organisms/         # Main logic UIs (form, results)
 ├── composables/           # Logic hooks (e.g., useCopartCalculator.js)
 ├── data/                  # Static fee rule tables (feeRules.js)
 ├── views/                 # Top-level views (CalculatorView.vue)
 ├── App.vue                # App shell
 └── main.js                # Entry point
```

## 🧮 Fee Calculation Logic

All calculation logic is handled in the composable:

```bash
src/composables/useCopartCalculator.js
```

Available functions:

- calculateTotal(amount, options)

Calculation parameters:

- titleType: "salvage" o "clean"
- vehicleType: "light" o "heavy"
- latePayment: true | false

Static tables:
Located in:

```bash
src/data/feeRules.js
```

Include:

- buyerFees
- internetBidFees
- brokerFees
- fixedFees

## 🧪 Example Usage

```
import { useCopartCalculator } from "@/composables/useCopartCalculator";

const { calculateTotal } = useCopartCalculator();

const result = calculateTotal(2500, {
  titleType: "salvage",
  vehicleType: "light",
  latePayment: false,
});
```

## ✅ Tailwind Setup

Tailwind is preconfigured with PostCSS and `tailwind.config.js`. You can use utility classes directly in your components.

## 📦 Icons

Use [Lucide](https://lucide.dev/) for UI icons.

```
<script setup>
import { Car, Truck } from 'lucide-vue-next'
</script>

<template>
  <Car class="w-5 h-5 text-gray-700" />
</template>
```
