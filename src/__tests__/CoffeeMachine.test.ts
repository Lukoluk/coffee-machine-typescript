import { Drink } from '../Drink';
import { CoffeeMachine } from '../CoffeeMachine';

describe("CoffeeMachine", () => {
  it("should serve product if exact money inserted", () => {
    // arrange
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = false;
    const Cubes = 0;
    const DrinkSize = "small";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 2;
    const LoyaltyCard = false;
    const TimeOfDay = 10;
    // act
    const serving = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    // assert
    expect(serving).toBe("Serving Coffee (small)");
  });

  it("should serve poduct and change in N.NN format if more money inserted", () => {
    // arrange
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = false;
    const Cubes = 0;
    const DrinkSize = "small";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 2.5;
    const LoyaltyCard = false;
    const TimeOfDay = 10;
    // act
    const serving = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    // assert
    expect(serving).toBe("Serving Coffee (small) with change 0.50");
  });

  it("shouldn't serve product if less money inserted", () => {
    // arrange
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = false;
    const Cubes = 0;
    const DrinkSize = "small";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 1;
    const LoyaltyCard = false;
    const TimeOfDay = 10;
    // act
    const serving = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    // assert
    expect(serving).toBe("Not enough money");
  });

  it("shouldn't allow the price of product to be 0 or less", () => {
    // arrange
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = -1;
    const Milk = false;
    const Cubes = 0;
    const DrinkSize = "small";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 2;
    const LoyaltyCard = false;
    const TimeOfDay = 10;
    // act
    const serving = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    // assert
    expect(serving).toBe("Error: invalid price");
  });

  it("should add 50 cents to price if a medium product is chosen", () => {
    // arrange
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = false;
    const Cubes = 0;
    const DrinkSize = "medium";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 2.5;
    const LoyaltyCard = false;
    const TimeOfDay = 10;
    // act
    const serving = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    // assert
    expect(serving).toBe("Serving Coffee (medium)");
  });

  it("should add 1€ to price if a large product is chosen", () => {
    // arrange
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = false;
    const Cubes = 0;
    const DrinkSize = "large";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 3;
    const LoyaltyCard = false;
    const TimeOfDay = 10;
    // act
    const serving = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    // assert
    expect(serving).toBe("Serving Coffee (large)");
  });
  it("should add 1€ to price if a large product is chosen", () => {
    // arrange
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = false;
    const Cubes = 0;
    const DrinkSize = "large";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 3;
    const LoyaltyCard = false;
    const TimeOfDay = 10;
    // act
    const serving = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    // assert
    expect(serving).toBe("Serving Coffee (large)");
  });
  it("should add 20 cents to price if milk is added", () => {
    // arrange
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = true;
    const Cubes = 0;
    const DrinkSize = "small";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 2.2;
    const LoyaltyCard = false;
    const TimeOfDay = 10;
    // act
    const serving = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    // assert
    expect(serving).toBe("Serving Coffee (small)");
  });
  it("shouldn't add to price if up to 2 cubes of sugar are chosen", () => {
    // arrange
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = false;
    const Cubes = 2;
    const DrinkSize = "small";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 2;
    const LoyaltyCard = false;
    const TimeOfDay = 10;
    // act
    const serving = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    // assert
    expect(serving).toBe("Serving Coffee (small)");
  });
  it("should add 10 cents to price for every cube of sugar above 2 cubes if chosen", () => {
    // arrange
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = false;
    const Cubes = 3;
    const DrinkSize = "small";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 2.1;
    const LoyaltyCard = false;
    const TimeOfDay = 10;
    // act
    const serving = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    // assert
    expect(serving).toBe("Serving Coffee (small)");
  });
  it("shouldn't allow to chose more than 5 cubes", () => {
    // arrange
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = false;
    const Cubes = 6;
    const DrinkSize = "small";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 2.1;
    const LoyaltyCard = false;
    const TimeOfDay = 10;
    // act
    const serving = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    // assert
    expect(serving).toBe("Error: too much sugar");
  });
  it("shouldn't serve a free drink and should charge the amount if it is the 5th drink and the customer doedn't have a loyality card", () => {
    // arrange
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = false;
    const Cubes = 0;
    const DrinkSize = "small";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 2;
    const LoyaltyCard = false;
    const TimeOfDay = 10;
    // act
    const serving1 = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    const serving2 = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    const serving3 = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    const serving4 = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    const serving5 = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    // assert
    expect(serving5).toBe("Serving Coffee (small)");
  });
  it("should serve a free drink if it is the 5th drink and the has a loyality card", () => {
    // arrange
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = false;
    const Cubes = 0;
    const DrinkSize = "small";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 0;
    const LoyaltyCard = true;
    const TimeOfDay = 10;
    // act
    const serving1 = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    const serving2 = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    const serving3 = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    const serving4 = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    const serving5 = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    // assert
    expect(serving5).toBe("Serving Coffee (small)");
  });
  it("shouldn't serve the 5th free drink for a loyality card and should charge the amount if the product is large", () => {
    // arrange
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = false;
    const Cubes = 0;
    const DrinkSize = "large";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 3;
    const LoyaltyCard = true;
    const TimeOfDay = 10;
    // act
    const serving1 = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    const serving2 = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    const serving3 = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    const serving4 = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    const serving5 = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    // assert
    expect(serving5).toBe("Serving Coffee (large)");
  });

  it("should serve drink 20% cheaper if the time is between 15:00 and 17:00 ", () => {
    // arrange
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = false;
    const Cubes = 0;
    const DrinkSize = "small";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 1.6;
    const LoyaltyCard = false;
    const TimeOfDay = 15;
    // act
    const serving = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    // assert
    expect(serving).toBe("Serving Coffee (small)");
  });

  it("shouldn't serve drink 20% cheaper if the time is less than 15:00", () => {
    // arrange
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = false;
    const Cubes = 0;
    const DrinkSize = "small";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 2;
    const LoyaltyCard = false;
    const TimeOfDay = 14;
    // act
    const serving = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    // assert
    expect(serving).toBe("Serving Coffee (small)");
  });

  it("shouldn't serve drink 20% cheaper if the time is 17:00 and more", () => {
    // arrange
    const machine = new CoffeeMachine();

    const DrinkType = "Coffee";
    const Price = 2;
    const Milk = false;
    const Cubes = 0;
    const DrinkSize = "small";

    const drink = new Drink(DrinkType, Price, Milk, Cubes, DrinkSize);

    const InsertedMoney = 2;
    const LoyaltyCard = false;
    const TimeOfDay = 17;
    // act
    const serving = machine.serve(drink, InsertedMoney, LoyaltyCard, TimeOfDay)
    // assert
    expect(serving).toBe("Serving Coffee (small)");
  });
});

