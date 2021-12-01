import { Context } from './context';

export interface AbstractExpressionProtocol {
  avaliar(context: Context): void;
}
