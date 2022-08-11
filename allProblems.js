// Problem:1  radianToDegree

function radianToDegree(radian) {
  //error handling
  if (typeof radian !== "number") {
    return "Please input any valid number..";
  } else {
    const output = radian * (180 / Math.PI);
    return output.toFixed(2);
  }
}

// Problem:2  isJavaScriptFile

function isJavaScriptFile(String) {
  //error handling
  if (typeof String !== "string") {
    return "Please enter any string";
  } else if (String.endsWith(".js")) {
    return true;
  } else {
    return false;
  }
}

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

// Problem 4: publicBusFare

function publicBusFare(persons) {
  const busCapacity = 50;
  const microBusCapacity = 11;
  const publicBusTicketPrice = 250;
  //error handling
  if (typeof persons !== "number" || persons < 0) {
    return "Please enter any positive number";
  } else if (persons >= 50) {
    const publicForMicroBus = persons % busCapacity;
    if (publicForMicroBus >= 11) {
      const restPublic = publicForMicroBus % microBusCapacity;
      const priceCost = restPublic * publicBusTicketPrice;
      return priceCost;
    } else {
      const priceCost = publicForMicroBus * publicBusTicketPrice;
      return priceCost;
    }
  } else if (persons >= 11 && persons <= 49) {
    const publicForLocalBus = persons % microBusCapacity;
    const priceCost = publicForLocalBus * publicBusTicketPrice;
    return priceCost;
  }
  return publicBusTicketPrice * persons;
}

// Problem 5: isBestFriend

function isBestFriend(obj1, obj2) {
  //error handling
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return "Please enter two objects as parameter";
  } else if (obj1.name.toLowerCase() === obj2.friend.toLowerCase() && obj1.friend.toLowerCase() === obj2.name.toLowerCase()) {
    return true;
  }
  return false;
}
