import { User } from "../entity/user.entity";
import { PositionEnum } from "../enums/position.enum";
import { ApprovedState } from "./approved.state";
import { CancelState } from "./cancel.state";
import { ReprovedState } from "./reproved.state";
import { OrderSolicitationState } from "./state";

export class ManagerApprovedState extends OrderSolicitationState {
  public name = "Approved by Manager";

  public approve(user: User): void {
    this.validatePosition({
      user,
      position: PositionEnum.DIRECTOR,
      errorMessage: "The user does not have permission to approve the request",
    });
    this.context.transitionTo(new ApprovedState());
  }

  public reprove(user: User): void {
    this.validatePosition({
      user,
      position: PositionEnum.DIRECTOR,
      errorMessage: "The user does not have permission to reprove the request",
    });
    this.context.transitionTo(new ReprovedState());
  }

  public cancel(user: User): void {
    this.validatePosition({
      user,
      position: PositionEnum.DIRECTOR,
      errorMessage: "The user does not have permission to cancel the request",
    });
    this.context.transitionTo(new CancelState());
  }
}
