import { User } from "../entity/user.entity";
import { PositionEnum } from "../enums/position.enum";
import { CancelState } from "./cancel.state";
import { ManagerApprovedState } from "./manager-approved.state";
import { ReprovedState } from "./reproved.state";
import { OrderSolicitationState } from "./state";

export class PendingState extends OrderSolicitationState {
  public name = "Pending";
  public approve(user: User): void {
    this.validatePosition({
      user,
      position: PositionEnum.MANAGER,
      errorMessage: "The user does not have permission to approve the request",
    });
    this.context.transitionTo(new ManagerApprovedState());
  }

  public reprove(user: User): void {
    this.validatePosition({
      user,
      position: PositionEnum.MANAGER,
      errorMessage: "The user does not have permission to reprove the request",
    });
    this.context.transitionTo(new ReprovedState());
  }

  public cancel(user: User): void {
    this.validatePosition({
      user,
      position: PositionEnum.MANAGER,
      errorMessage: "The user does not have permission to cancel the request",
    });
    this.context.transitionTo(new CancelState());
  }
}
