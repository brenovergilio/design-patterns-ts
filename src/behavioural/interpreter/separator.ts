import { AbstractExpressionProtocol } from './abstract-expression-protocol';
import { Context } from './context';

export class Separator implements AbstractExpressionProtocol {
  avaliar(context: Context): void {
    const expression = context.expression;
    context.expression = expression.replace(' ', '-');
  }
}
