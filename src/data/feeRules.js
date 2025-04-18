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
      { min: 5000, max: 5999.99, fee: 1000 },
      { min: 6000, max: 6499.99, fee: 1050 },
      { min: 6500, max: 7999.99, fee: 1050 },
      { min: 8000, max: 8499.99, fee: 1090 },
      { min: 8500, max: 9999.99, fee: 1090 },
      { min: 10000, max: 14999.99, fee: 1200 },
      { min: 15000, max: Infinity, feePercent: 0.1225 },
    ],
    heavy: [
      { min: 0, max: 49.99, fee: 32.5 },
      { min: 50, max: 99.99, fee: 55 },
      { min: 100, max: 199.99, fee: 100 },
      { min: 200, max: 299.99, fee: 165 },
      { min: 300, max: 349.99, fee: 175 },
      { min: 350, max: 399.99, fee: 187.5 },
      { min: 400, max: 449.99, fee: 220 },
      { min: 450, max: 499.99, fee: 230 },
      { min: 500, max: 549.99, fee: 260 },
      { min: 550, max: 599.99, fee: 265 },
      { min: 600, max: 699.99, fee: 300 },
      { min: 700, max: 799.99, fee: 337.5 },
      { min: 800, max: 899.99, fee: 367.5 },
      { min: 900, max: 999.99, fee: 395 },
      { min: 1000, max: 1199.99, fee: 470 },
      { min: 1200, max: 1299.99, fee: 490 },
      { min: 1300, max: 1399.99, fee: 512.5 },
      { min: 1400, max: 1499.99, fee: 540 },
      { min: 1500, max: 1599.99, fee: 560 },
      { min: 1600, max: 1699.99, fee: 585 },
      { min: 1700, max: 1799.99, fee: 612.5 },
      { min: 1800, max: 1999.99, fee: 650 },
      { min: 2000, max: 2399.99, fee: 692.5 },
      { min: 2400, max: 2499.99, fee: 735 },
      { min: 2500, max: 2999.99, fee: 805 },
      { min: 3000, max: 3499.99, fee: 860 },
      { min: 3500, max: 3999.99, fee: 957.5 },
      { min: 4000, max: 4499.99, fee: 965 },
      { min: 4500, max: 4999.99, fee: 1030 },
      { min: 5000, max: 5999.99, fee: 1030 },
      { min: 6000, max: 6499.99, fee: 1080 },
      { min: 6500, max: 7999.99, fee: 1080 },
      { min: 8000, max: 8499.99, fee: 1120 },
      { min: 8500, max: 9999.99, fee: 1120 },
      { min: 10000, max: 14999.99, fee: 1230 },
      { min: 15000, max: Infinity, feePercent: 0.1225 },
    ],
  },
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
      { min: 5000, max: 5999.99, fee: 1000 },
      { min: 6000, max: 6499.99, fee: 1050 },
      { min: 6500, max: 6999.99, fee: 1050 },
      { min: 7000, max: 7499.99, fee: 1050 },
      { min: 7500, max: 7999.99, fee: 1065 },
      { min: 8000, max: 8499.99, fee: 1090 },
      { min: 8500, max: 9999.99, fee: 1090 },
      { min: 10000, max: 14999.99, fee: 1200 },
      { min: 15000, max: Infinity, feePercent: 0.1225 },
    ],
    heavy: [
      { min: 0, max: 49.99, fee: 32.5 },
      { min: 50, max: 99.99, fee: 55 },
      { min: 100, max: 199.99, fee: 100 },
      { min: 200, max: 299.99, fee: 155 },
      { min: 300, max: 349.99, fee: 160 },
      { min: 350, max: 399.99, fee: 165 },
      { min: 400, max: 449.99, fee: 200 },
      { min: 450, max: 499.99, fee: 205 },
      { min: 500, max: 549.99, fee: 240 },
      { min: 550, max: 599.99, fee: 245 },
      { min: 600, max: 699.99, fee: 275 },
      { min: 700, max: 799.99, fee: 305 },
      { min: 800, max: 899.99, fee: 335 },
      { min: 900, max: 999.99, fee: 370 },
      { min: 1000, max: 1199.99, fee: 440 },
      { min: 1200, max: 1299.99, fee: 460 },
      { min: 1300, max: 1399.99, fee: 485 },
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
      { min: 5000, max: 5999.99, fee: 1000 },
      { min: 6000, max: 6499.99, fee: 1050 },
      { min: 6500, max: 6999.99, fee: 1050 },
      { min: 7000, max: 7499.99, fee: 1050 },
      { min: 7500, max: 7999.99, fee: 1065 },
      { min: 8000, max: 8499.99, fee: 1090 },
      { min: 8500, max: 9999.99, fee: 1090 },
      { min: 10000, max: 14999.99, fee: 1200 },
      { min: 15000, max: Infinity, feePercent: 0.1225 },
    ],
  },
};

/**
 * Internet bid fees depending on amount ranges.
 * Each rule may include a flat fee and a percentage.
 *
 * @prop {number} min - Minimum value of bid
 * @prop {number} max - Maximum value of bid
 * @prop {number} fee - Flat fee
 * @prop {number} percent - Optional percentage of the bid
 */
export const internetBidFees = [
  { min: 0, max: 99.99, fee: 0, percent: 0.0 },
  { min: 100, max: 499.99, fee: 50, percent: 0 },
  { min: 500, max: 999.99, fee: 65, percent: 0 },
  { min: 1000, max: 1499.99, fee: 85, percent: 0 },
  { min: 1500, max: 1999.99, fee: 95, percent: 0 },
  { min: 2000, max: 3999.99, fee: 110, percent: 0 },
  { min: 4000, max: 5999.99, fee: 125, percent: 0 },
  { min: 6000, max: 7999.99, fee: 145, percent: 0 },
  { min: 8000, max: Infinity, fee: 160, percent: 0.0 },
];

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
 *
 * @prop {number} gate - Gate fee
 * @prop {number} env - Environmental fee
 * @prop {number} title - Title mailing fee
 * @prop {number} late - Late payment fee (optional)
 */
export const fixedFees = {
  gate: 95,
  env: 15,
  title: 20,
  late: 50, // Not currently applied in calculations
};
