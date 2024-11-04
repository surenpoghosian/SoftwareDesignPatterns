import { OldPayment } from "./payment-systems/OldPayment";
import { NewPayment } from "./payment-systems/NewPayment";
import { OldPaymentAdapter } from "./adapters/OldPaymentAdapter";
import { NewPaymentAdapter } from "./adapters/NewPaymentAdapter";
import { PaymentService } from "./services/PaymentService";

const oldPayment = new OldPayment();
const oldPaymentAdapter = new OldPaymentAdapter(oldPayment);
const oldPaymentService = new PaymentService(oldPaymentAdapter);
oldPaymentService.process(100);

const newPayment = new NewPayment();
const newPaymentAdapter = new NewPaymentAdapter(newPayment);
const newPaymentService = new PaymentService(newPaymentAdapter);
newPaymentService.process(200);