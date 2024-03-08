import { OrderSolicitationState } from './state';

export class Context {
  private _state!: OrderSolicitationState;

  constructor(state: OrderSolicitationState) {
    this.transitionTo(state);
  }

  public transitionTo(state: OrderSolicitationState): void {
    this._state = state;
    this._state.setContext(this);
  }
}
