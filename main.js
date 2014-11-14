function City(name) {
  this.name = name;
  this.lots = [];
}

function Lot(type) {
  this.population = 0;
  this.type = type;
  this.demand = [];
  this.supply = [];
}

function Demand(good, quantity) {
  this.good = good;
  this.quantity = quantity;
}

function Supply(good, quantity) {
  this.good = good;
  this.quantity = quantity;
}

function Person() {
}

function TradeGood() {
  this.price = 0;
}

city = new City(Destin);
city.lots[0] = new Lot("home");
city.lots[0].demand[0] = new Demand("food", 3);
