// Problem 3: oilPrice

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
  const dieselPricePerLtr = 114;
  const petrolPricePerLtr = 130;
  const octanePricePerLtr = 135;
  //error handling
  if (typeof dieselQuantity !== "number" || typeof petrolQuantity !== "number" || typeof octaneQuantity !== "number" || dieselQuantity < 0 || petrolQuantity < 0 || octaneQuantity < 0) {
    return "Plese enter any positive number";
  } else {
    const total = dieselPricePerLtr * dieselQuantity + petrolPricePerLtr * petrolQuantity + octanePricePerLtr * octaneQuantity;
    return total;
  }
}
