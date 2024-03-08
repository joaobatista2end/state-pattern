import { User } from '../entity/user.entity';
import { OrderSolicitationState } from './state';

export class ReprovedState extends OrderSolicitationState {
  public cancel(user: User): void {
    throw new Error("The request has already been reproved.");
  }
  public approve(user: User): void {
    throw new Error("The request has already been reproved.");
  }
  public reprove(user: User): void {
    throw new Error("The request has already been reproved.");
  }
}
