export const currencyFormater = (value) => {
  // only numbers from value
  let newValue = value;
  newValue = newValue.replace(/\D/g, "");
  newValue = newValue.replace(/(\d)(\d{2})$/, "$1,$2");
  newValue = newValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
  return newValue;
};
