const { getCoordinates, haversineDistance } = require('../utils/geoUtils');
const warehouses = require('../config/warehouses');

const calculateShipping = async (customerAddress) => {
  const customerLocation = await getCoordinates(customerAddress);

  let bestOption = null;
  let cheapestOption = null;
  let fastestOption = null;

  warehouses.forEach(warehouse => {
    const distance = haversineDistance(warehouse.lat, warehouse.lon, customerLocation.lat, customerLocation.lon);

    const roadCost = distance * warehouse.rates.road;
    const flightCost = distance * warehouse.rates.flight;

    const roadTime = distance / warehouse.speed.road;
    const flightTime = distance / warehouse.speed.flight;

    const options = [
      { type: "Road", cost: roadCost, time: roadTime, warehouse: warehouse.name },
      { type: "Flight", cost: flightCost, time: flightTime, warehouse: warehouse.name }
    ];

    options.forEach(option => {
      if (!bestOption || (option.cost < bestOption.cost && option.time < bestOption.time)) {
        bestOption = option;
      }
      if (!cheapestOption || option.cost < cheapestOption.cost) {
        cheapestOption = option;
      }
      if (!fastestOption || option.time < fastestOption.time) {
        fastestOption = option;
      }
    });
  });

  return { best: bestOption, cheapest: cheapestOption, fastest: fastestOption };
};

module.exports = { calculateShipping };
