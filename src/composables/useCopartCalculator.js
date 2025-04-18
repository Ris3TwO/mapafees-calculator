import {
  buyerFees,
  internetBidFees,
  fixedFees,
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
   * Calculates the Internet Bid Fee based on the bid amount.
   * Some ranges apply a percentage on top of a fixed fee.
   *
   * @param {number} amount - Bid value
   * @returns {number} Internet bid fee including percent addition
   */
  const getInternetBidFee = (amount) => {
    const rule = internetBidFees.find(
      (f) => amount >= f.min && amount <= f.max,
    );
    if (!rule) return 0;
    const percentValue = amount * rule.percent;
    return rule.fee + percentValue;
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
    const internetFee = getInternetBidFee(amount);
    const gateFee = fixedFees.gate;
    const envFee = fixedFees.env;
    const titleFee = fixedFees.title;
    const brokerFee = getBrokerFee(amount);
    const lateFee = options.latePayment ? fixedFees.late : 0; // Currently not in use

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
