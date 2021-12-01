import { AbstractExpressionProtocol } from './abstract-expression-protocol';
import { Context } from './context';
import { DayExpression } from './day-expression';
import { MonthExpression } from './month-expression';
import { Separator } from './separator';
import { YearExpression } from './year-expression';

const expressions: AbstractExpressionProtocol[] = [];
const context = new Context('YYYY-MM-DD', new Date());

const formato = context.expression.split('-');

for (const f of formato) {
  if (f === 'DD') expressions.push(new DayExpression());
  else if (f === 'MM') expressions.push(new MonthExpression());
  else if (f === 'YYYY') expressions.push(new YearExpression());
}

expressions.push(new Separator());

for (const expression of expressions) {
  expression.avaliar(context);
}

console.log(context.expression);
