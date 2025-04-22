/**
 * feeRules.js
 *
 * Contains all static fee configuration for the Copart calculator logic.
 * Includes buyer fees (by title and vehicle type), internet bid fees,
 * broker fees, and fixed fees.
 */

/**
 * Buyer fee ranges based on:
 * - Vehicle title: 'salvage' or 'clean'
 * - Vehicle type: 'light' or 'heavy'
 *
 * Each range includes:
 * @prop {number} min - Minimum bid value (inclusive)
 * @prop {number} max - Maximum bid value (inclusive)
 * @prop {number} [fee] - Fixed fee (if defined)
 * @prop {number} [feePercent] - Optional percentage (for high values)
 */
export const buyerFees = {
  clean: {
    light: [
      { min: 0, max: 49.99, fee: 27.5 },
      { min: 50, max: 99.99, fee: 50 },
      { min: 100, max: 199.99, fee: 90 },
      { min: 200, max: 299.99, fee: 135 },
      { min: 300, max: 349.99, fee: 137.5 },
      { min: 350, max: 399.99, fee: 140 },
      { min: 400, max: 449.99, fee: 182.5 },
      { min: 450, max: 499.99, fee: 185 },
      { min: 500, max: 549.99, fee: 212.5 },
      { min: 550, max: 599.99, fee: 215 },
      { min: 600, max: 699.99, fee: 245 },
      { min: 700, max: 799.99, fee: 270 },
      { min: 800, max: 899.99, fee: 295 },
      { min: 900, max: 999.99, fee: 325 },
      { min: 1000, max: 1199.99, fee: 385 },
      { min: 1200, max: 1299.99, fee: 415 },
      { min: 1300, max: 1399.99, fee: 435 },
      { min: 1400, max: 1499.99, fee: 455 },
      { min: 1500, max: 1599.99, fee: 470 },
      { min: 1600, max: 1699.99, fee: 495 },
      { min: 1700, max: 1799.99, fee: 510 },
      { min: 1800, max: 1999.99, fee: 540 },
      { min: 2000, max: 2399.99, fee: 590 },
      { min: 2400, max: 2499.99, fee: 605 },
      { min: 2500, max: 2999.99, fee: 650 },
      { min: 3000, max: 3499.99, fee: 775 },
      { min: 3500, max: 3999.99, fee: 875 },
      { min: 4000, max: 4499.99, fee: 935 },
      { min: 4500, max: 4999.99, fee: 1000 },
      { min: 5000, max: 5499.99, fee: 1000 },
      { min: 5500, max: 5999.99, fee: 1000 },
      { min: 6000, max: 6499.99, fee: 1050 },
      { min: 6500, max: 6999.99, fee: 1050 },
      { min: 7000, max: 7499.99, fee: 1050 },
      { min: 7500, max: 7999.99, fee: 1065 },
      { min: 8000, max: 8499.99, fee: 1090 },
      { min: 8500, max: 8999.99, fee: 1090 },
      { min: 9000, max: 9999.99, fee: 1090 },
      { min: 10000, max: 10499.99, fee: 1200 },
      { min: 10500, max: 10999.99, fee: 1200 },
      { min: 11000, max: 11499.99, fee: 1200 },
      { min: 11500, max: 11999.99, fee: 1200 },
      { min: 12000, max: 12499.99, fee: 1200 },
      { min: 12500, max: 14999.99, fee: 1200 },
      { min: 15000, max: Infinity, feePercent: 0.1225 },
    ],
    heavy: [
      { min: 0, max: 49.99, fee: 27.5 },
      { min: 50, max: 99.99, fee: 50 },
      { min: 100, max: 199.99, fee: 90 },
      { min: 200, max: 299.99, fee: 135 },
      { min: 300, max: 349.99, fee: 137.5 },
      { min: 350, max: 399.99, fee: 140 },
      { min: 400, max: 449.99, fee: 182.5 },
      { min: 450, max: 499.99, fee: 185 },
      { min: 500, max: 549.99, fee: 212.5 },
      { min: 550, max: 599.99, fee: 215 },
      { min: 600, max: 699.99, fee: 245 },
      { min: 700, max: 799.99, fee: 270 },
      { min: 800, max: 899.99, fee: 295 },
      { min: 900, max: 999.99, fee: 325 },
      { min: 1000, max: 1199.99, fee: 385 },
      { min: 1200, max: 1299.99, fee: 415 },
      { min: 1300, max: 1399.99, fee: 435 },
      { min: 1400, max: 1499.99, fee: 455 },
      { min: 1500, max: 1599.99, fee: 470 },
      { min: 1600, max: 1699.99, fee: 495 },
      { min: 1700, max: 1799.99, fee: 510 },
      { min: 1800, max: 1999.99, fee: 540 },
      { min: 2000, max: 2399.99, fee: 590 },
      { min: 2400, max: 2499.99, fee: 605 },
      { min: 2500, max: 2999.99, fee: 650 },
      { min: 3000, max: 3499.99, fee: 775 },
      { min: 3500, max: 3999.99, fee: 875 },
      { min: 4000, max: 4499.99, fee: 935 },
      { min: 4500, max: 4999.99, fee: 995 },
      { min: 5000, max: 5999.99, feePercent: 0.2 },
      { min: 6000, max: 6499.99, feePercent: 0.2 },
      { min: 6500, max: Infinity, feePercent: 0.2 },
    ],
  },
  salvage: {
    light: [
      { min: 0, max: 49.99, fee: 27.5 },
      { min: 50, max: 99.99, fee: 50 },
      { min: 100, max: 199.99, fee: 90 },
      { min: 200, max: 299.99, fee: 145 },
      { min: 300, max: 349.99, fee: 155 },
      { min: 350, max: 399.99, fee: 167.5 },
      { min: 400, max: 449.99, fee: 200 },
      { min: 450, max: 499.99, fee: 210 },
      { min: 500, max: 549.99, fee: 235 },
      { min: 550, max: 599.99, fee: 240 },
      { min: 600, max: 699.99, fee: 275 },
      { min: 700, max: 799.99, fee: 312.5 },
      { min: 800, max: 899.99, fee: 342.5 },
      { min: 900, max: 999.99, fee: 370 },
      { min: 1000, max: 1199.99, fee: 440 },
      { min: 1200, max: 1299.99, fee: 460 },
      { min: 1300, max: 1399.99, fee: 482.5 },
      { min: 1400, max: 1499.99, fee: 510 },
      { min: 1500, max: 1599.99, fee: 530 },
      { min: 1600, max: 1699.99, fee: 555 },
      { min: 1700, max: 1799.99, fee: 582.5 },
      { min: 1800, max: 1999.99, fee: 620 },
      { min: 2000, max: 2399.99, fee: 662.5 },
      { min: 2400, max: 2499.99, fee: 705 },
      { min: 2500, max: 2999.99, fee: 775 },
      { min: 3000, max: 3499.99, fee: 830 },
      { min: 3500, max: 3999.99, fee: 927.5 },
      { min: 4000, max: 4499.99, fee: 935 },
      { min: 4500, max: 4999.99, fee: 1000 },
      { min: 5000, max: 5499.99, fee: 1025 },
      { min: 5500, max: 5999.99, fee: 1055 },
      { min: 6000, max: 6499.99, fee: 1085 },
      { min: 6500, max: 6999.99, fee: 1110 },
      { min: 7000, max: 7499.99, fee: 1145 },
      { min: 7500, max: 7999.99, fee: 1175 },
      { min: 8000, max: 8499.99, fee: 1200 },
      { min: 8500, max: 8999.99, fee: 1225 },
      { min: 9000, max: 9999.99, fee: 1225 },
      { min: 10000, max: 10499.99, fee: 1390 },
      { min: 10500, max: 10999.99, fee: 1390 },
      { min: 11000, max: 11499.99, fee: 1390 },
      { min: 11500, max: 11999.99, fee: 1400 },
      { min: 12000, max: 12499.99, fee: 1400 },
      { min: 12500, max: 14999.99, fee: 1400 },
      { min: 15000, max: Infinity, feePercent: 0.125 },
    ],
    heavy: [
      { min: 0, max: 49.99, fee: 27.5 },
      { min: 50, max: 99.99, fee: 50 },
      { min: 100, max: 199.99, fee: 90 },
      { min: 200, max: 299.99, fee: 145 },
      { min: 300, max: 349.99, fee: 155 },
      { min: 350, max: 399.99, fee: 167.5 },
      { min: 400, max: 449.99, fee: 200 },
      { min: 450, max: 499.99, fee: 210 },
      { min: 500, max: 549.99, fee: 235 },
      { min: 550, max: 599.99, fee: 240 },
      { min: 600, max: 699.99, fee: 275 },
      { min: 700, max: 799.99, fee: 312.5 },
      { min: 800, max: 899.99, fee: 342.5 },
      { min: 900, max: 999.99, fee: 370 },
      { min: 1000, max: 1199.99, fee: 440 },
      { min: 1200, max: 1299.99, fee: 460 },
      { min: 1300, max: 1399.99, fee: 482.5 },
      { min: 1400, max: 1499.99, fee: 510 },
      { min: 1500, max: 1599.99, fee: 530 },
      { min: 1600, max: 1699.99, fee: 555 },
      { min: 1700, max: 1799.99, fee: 582.5 },
      { min: 1800, max: 1999.99, fee: 620 },
      { min: 2000, max: 2399.99, fee: 662.5 },
      { min: 2400, max: 2499.99, fee: 705 },
      { min: 2500, max: 2999.99, fee: 775 },
      { min: 3000, max: 3499.99, fee: 830 },
      { min: 3500, max: 3999.99, fee: 927.5 },
      { min: 4000, max: 4499.99, fee: 935 },
      { min: 4500, max: 4999.99, fee: 1000 },
      { min: 5000, max: 5499.99, fee: 1025 },
      { min: 5500, max: 5999.99, feePercent: 0.2 },
      { min: 6000, max: 6499.99, feePercent: 0.2 },
      { min: 6500, max: Infinity, feePercent: 0.2 },
    ],
  },
};

/**
 * Internet bid fees based on title and vehicle type.
 * Each range may include a flat fee and optional percent (currently unused).
 *
 * @prop {number} min - Minimum bid value
 * @prop {number} max - Maximum bid value
 * @prop {number} fee - Fixed fee
 */
export const internetBidFees = {
  clean: {
    light: [
      { min: 0, max: 99.99, fee: 0 },
      { min: 100, max: 499.99, fee: 49 },
      { min: 500, max: 999.99, fee: 59 },
      { min: 1000, max: 1499.99, fee: 79 },
      { min: 1500, max: 1999.99, fee: 89 },
      { min: 2000, max: 3999.99, fee: 99 },
      { min: 4000, max: 5999.99, fee: 109 },
      { min: 6000, max: 7999.99, fee: 139 },
      { min: 8000, max: Infinity, fee: 149 },
    ],
    heavy: [
      { min: 0, max: 99.99, fee: 0 },
      { min: 100, max: 499.99, fee: 49 },
      { min: 500, max: 999.99, fee: 59 },
      { min: 1000, max: 1499.99, fee: 79 },
      { min: 1500, max: 1999.99, fee: 89 },
      { min: 2000, max: 3999.99, fee: 99 },
      { min: 4000, max: 5999.99, fee: 109 },
      { min: 6000, max: 7999.99, fee: 139 },
      { min: 8000, max: Infinity, fee: 149 },
    ],
  },
  salvage: {
    light: [
      { min: 0, max: 100, fee: 0 },
      { min: 100.01, max: 500, fee: 50 },
      { min: 500.01, max: 1000, fee: 65 },
      { min: 1000.01, max: 1500, fee: 85 },
      { min: 1500.01, max: 2000, fee: 95 },
      { min: 2000.01, max: 4000, fee: 110 },
      { min: 4000.01, max: 6000, fee: 125 },
      { min: 6000.01, max: 8000, fee: 145 },
      { min: 8000.01, max: Infinity, fee: 160 },
    ],
    heavy: [
      { min: 0, max: 100, fee: 0 },
      { min: 100.01, max: 500, fee: 50 },
      { min: 500.01, max: 1000, fee: 65 },
      { min: 1000.01, max: 1500, fee: 85 },
      { min: 1500.01, max: 2000, fee: 95 },
      { min: 2000.01, max: 4000, fee: 110 },
      { min: 4000.01, max: 6000, fee: 125 },
      { min: 6000.01, max: 8000, fee: 145 },
      { min: 8000.01, max: Infinity, fee: 160 },
    ],
  },
};

/**
 * Broker fees based on bid range.
 * These are fixed fees for Mapa as broker service.
 *
 * @prop {number} min - Minimum bid value
 * @prop {number} max - Maximum bid value
 * @prop {number} fee - Fixed broker fee
 */
export const brokerFees = [
  { min: 0, max: 5999.99, fee: 400 },
  { min: 6000, max: 10999.99, fee: 550 },
  { min: 11000, max: 14999.99, fee: 650 },
  { min: 15000, max: Infinity, fee: 700 },
];

/**
 * Fixed fees applied to all bids.
 * Some fees vary depending on the title type.
 *
 * @param {'clean' | 'salvage'} titleType - Vehicle title type
 * @returns {object} - Set of applicable fixed fees
 *
 * Fees:
 * - gate: $79 for clean titles, $95 for salvage titles
 * - env: $15 flat
 * - title: $20 flat
 * - late: $50 flat (optional)
 */
export const getFixedFees = (titleType = 'salvage') => ({
  gate: titleType === 'clean' ? 79 : 95,
  env: 15,
  title: 20,
  late: 50, // Currently optional in the calculator
});
