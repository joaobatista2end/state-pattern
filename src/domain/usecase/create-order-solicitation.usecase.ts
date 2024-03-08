import { UseCase } from "../../core/usecase";
import { Category } from "../entity/category.entity";
import { CostCenter } from "../entity/cost-center.entity";
import { OrderSolicitation } from "../entity/order-solicitation.entity";
import { Position } from "../entity/position.entity";
import { User } from "../entity/user.entity";
import { PositionEnum } from "../enums/position.enum";

export class CreateOrderSolicitationUseCase extends UseCase {
  public execute() {
    const category = new Category({
      name: "Cursos",
    });

    const costCenter = new CostCenter({
      name: "ADM Digital",
    });

    const requester = new User({
      email: "jhonxbatista@gmail.com",
      position: new Position({
        costCenter,
        id: PositionEnum.COLLABORATOR,
        name: "Analista",
      }),
      username: "jhonxbatista",
    });

    const manager = new User({
      email: "jhonxbatista@gmail.com",
      position: new Position({
        costCenter,
        id: PositionEnum.MANAGER,
        name: "Gerente GG",
      }),
      username: "jhonxbatista",
    });

    const driector = new User({
      email: "andré",
      position: new Position({
        costCenter,
        id: PositionEnum.MANAGER,
        name: "Diretor GG",
      }),
      username: "jhonxbatista",
    });

    const solicitation = new OrderSolicitation({
      category,
      costCenter,
      monthValue: 1000,
      requester,
      totalValue: 12000,
    });

    console.log(solicitation.state.name);
    solicitation.state.approve(manager);
    console.log(solicitation.state.name);
    solicitation.state.approve(driector);
    console.log(solicitation.state.name);
  }
}
