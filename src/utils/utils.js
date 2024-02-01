export const formatCurrency = (amount) => {
  // Get the integer part and split it into groups of two digits
  const integerPart = amount.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");

  // Combine the integer part and the decimal part (if any)
  const formattedAmount = integerPart;

  // Add the Indian Rupee symbol (₹) and return the formatted amount
  return `₹ ${formattedAmount}`;
};

export const wait = function (time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
