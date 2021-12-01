import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder(); // Pendente
order.approvePayment(); // Aprovado
order.waitPayment(); // Pendente
order.shipOrder(); // Não pode enviar o pedido
order.rejectPayment(); // Recusado
