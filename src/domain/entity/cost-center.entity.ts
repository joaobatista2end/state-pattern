import { uid } from 'uid';

export interface CostCenterParams {
  name: string;
}

export class CostCenter {
  id: string;
  name: string;

  constructor(params: CostCenterParams) {
    this.id = uid();
    this.name = params.name;
  }
}
