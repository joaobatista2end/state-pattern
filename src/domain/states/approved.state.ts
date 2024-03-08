import { User } from '../entity/user.entity';
import { OrderSolicitationState } from './state';

export class ApprovedState extends OrderSolicitationState {
  public name = "Approved by Director";

  public cancel(user: User): void {
    throw new Error("The request has already been approved.");
  }
  public approve(user: User): void {
    throw new Error("The request has already been approved.");
  }
  public reprove(user: User): void {
    throw new Error("The request has already been approved.");
  }
}
