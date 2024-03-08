import { PositionEnum } from "../enums/position.enum";
import { CostCenter } from "./cost-center.entity";

export interface PositionParams {
  id: PositionEnum;
  name: string;
  costCenter: CostCenter;
}

export class Position {
  id: PositionEnum;
  name: string;
  costCenter: CostCenter;

  constructor(params: PositionParams) {
    this.id = params.id;
    this.name = params.name;
    this.costCenter = params.costCenter;
  }
}
