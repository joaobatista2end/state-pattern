import { uid } from 'uid';

import { Position } from './position.entity';

export interface UserParams {
  email: string;
  username: string;
  position: Position;
}

export class User {
  id: string;
  email: string;
  username: string;
  position: Position;

  constructor(params: UserParams) {
    this.id = uid();
    this.email = params.email;
    this.username = params.username;
    this.position = params.position;
  }
}
