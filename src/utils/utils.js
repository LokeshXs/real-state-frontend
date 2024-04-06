export const formatCurrency = (amount) => {


  const formattedCurrency = new Intl.NumberFormat("en-In",{style:"currency",currency:"INR"}).format(amount);

  

  return formattedCurrency
};

export const wait = function (time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
