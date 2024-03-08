import { User } from '../entity/user.entity';
import { OrderSolicitationState } from './state';

export class CancelState extends OrderSolicitationState {
  public name = "Canceled";

  public cancel(user: User): void {
    throw new Error("The request has already been cancled.");
  }
  public approve(user: User): void {
    throw new Error("The request has already been cancled.");
  }
  public reprove(user: User): void {
    throw new Error("The request has already been cancled.");
  }
}
