import { CarBuilder } from "./builders/CarBuilder";

const car = new CarBuilder()
  .setMake("Tesla")
  .setModel("Model S")
  .setYear(2023)
  .setColor("Red")
  .setEngineType("Electric")
  .build();

car.display();