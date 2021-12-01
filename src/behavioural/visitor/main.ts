import { AlcoholicDrink } from './alcoholic-drink';
import { BrazilTaxVisitor } from './brazil-tax-visitor';
import { Cigarette } from './cigarette';
import { Food } from './food';

const food = new Food(10);
const cigarette = new Cigarette(5);
const alcoholicDrink = new AlcoholicDrink(10);

const brazilTaxVisitor = new BrazilTaxVisitor();

const cart = [food, cigarette, alcoholicDrink];
const total = cart.reduce((sum, item) => sum + item.getPrice(), 0);
const totalWithTaxes = cart.reduce(
  (sum, item) => sum + item.getPriceWithTaxes(brazilTaxVisitor),
  0,
);
console.log(total);
console.log(totalWithTaxes);
