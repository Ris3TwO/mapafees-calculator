import {
  buyerFees,
  internetBidFees,
  getFixedFees,
  brokerFees,
} from '@/data/feeRules';

export const useCopartCalculator = () => {
  /**
   * Calculates the Buyer Fee based on bid amount, title type, and vehicle type.
   *
   * @param {number} amount - Bid value
   * @param {'salvage' | 'clean'} titleType - Type of vehicle title
   * @param {'light' | 'heavy'} vehicleType - Type of vehicle
   * @returns {number} The applicable Buyer Fee
   */
  const getBuyerFee = (
    amount,
    titleType = 'salvage',
    vehicleType = 'light',
  ) => {
    const rules = buyerFees?.[titleType]?.[vehicleType];
    if (!rules) return 0;

    const rule = rules.find((r) => amount >= r.min && amount <= r.max);
    if (!rule) return 0;

    return rule.fee ?? parseFloat((amount * rule.feePercent).toFixed(2));
  };

  /**
   * Returns the fixed Broker Fee based on the bid amount.
   *
   * @param {number} amount - Bid value
   * @returns {number} Broker Fee for the given range
   */
  const getBrokerFee = (amount) => {
    const rule = brokerFees.find((f) => amount >= f.min && amount <= f.max);
    return rule ? rule.fee : 0;
  };

  /**
   * Returns the Internet Bid Fee based on title type and vehicle type.
   *
   * @param {number} amount - Bid amount
   * @param {'salvage' | 'clean'} titleType - Vehicle title type
   * @param {'light' | 'heavy'} vehicleType - Vehicle weight category
   * @returns {number} The matching fee
   */
  const getInternetBidFee = (
    amount,
    titleType = 'salvage',
    vehicleType = 'light',
  ) => {
    const rules = internetBidFees?.[titleType]?.[vehicleType];
    if (!rules) return 0;
    const rule = rules.find((f) => amount >= f.min && amount <= f.max);
    return rule ? rule.fee : 0;
  };

  /**
   * Computes the full total of fees and bid amount, based on selected options.
   *
   * @param {number|string} inputAmount - Raw bid input
   * @param {object} options - Additional configuration (titleType, vehicleType, latePayment)
   * @param {'salvage' | 'clean'} [options.titleType] - Type of vehicle title
   * @param {'light' | 'heavy'} [options.vehicleType] - Type of vehicle
   * @param {boolean} [options.latePayment] - Whether late payment fee applies
   * @returns {object|null} A detailed breakdown of fees and total, or null if invalid input
   */
  const calculateTotal = (inputAmount, options = {}) => {
    const amount = parseFloat(inputAmount);
    if (isNaN(amount) || amount < 0) return null;

    const titleType = options.titleType || 'salvage';
    const vehicleType = options.vehicleType || 'light';

    const buyerFee = getBuyerFee(amount, titleType, vehicleType);
    const internetFee = getInternetBidFee(amount, titleType, vehicleType);
    const brokerFee = getBrokerFee(amount);
    const { gate, env, title, late } = getFixedFees(titleType);
    const gateFee = gate;
    const envFee = env;
    const titleFee = title;
    const lateFee = options.latePayment ? late : 0;

    const total =
      amount + buyerFee + internetFee + gateFee + envFee + titleFee + brokerFee;

    return {
      amount,
      buyerFee,
      internetFee,
      gateFee,
      envFee,
      titleFee,
      brokerFee,
      // lateFee,
      total,
    };
  };

  return { calculateTotal };
};
