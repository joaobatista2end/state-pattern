import { User } from '../entity/user.entity';
import { PositionEnum } from '../enums/position.enum';
import { Context } from './context';

interface ValidatePositionParams {
  user: User;
  position: PositionEnum;
  errorMessage: string;
}

export abstract class OrderSolicitationState {
  protected context!: Context;
  public name!: string;

  public setContext(context: Context) {
    this.context = context;
  }

  protected validatePosition(params: ValidatePositionParams): boolean {
    if (!(params.user.position.id === params.position)) {
      throw new Error(params.errorMessage);
    }
    return true;
  }

  public abstract approve(user: User): void;

  public abstract reprove(user: User): void;

  public abstract cancel(user: User): void;
}
