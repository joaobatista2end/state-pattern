import { uid } from 'uid';

import { PendingState } from '../states/pending.state';
import { OrderSolicitationState } from '../states/state';
import { Category } from './category.entity';
import { CostCenter } from './cost-center.entity';
import { User } from './user.entity';

export interface OrderSolicitationParams {
  costCenter: CostCenter;
  category: Category;
  subcategory?: Category;
  subcategory2?: Category;
  requester: User;
  totalValue: number;
  monthValue: number;
}

export class OrderSolicitation {
  id: string;
  costCenter: CostCenter;
  category: Category;
  subcategory?: Category;
  subcategory2?: Category;
  requester: User;
  totalValue: number;
  monthValue: number;
  state: OrderSolicitationState;

  constructor(params: OrderSolicitationParams) {
    this.id = uid();
    this.costCenter = params.costCenter;
    this.category = params.category;
    this.requester = params.requester;
    this.totalValue = params.totalValue;
    this.monthValue = params.monthValue;
    this.state = new PendingState();
  }
}
