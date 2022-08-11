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
