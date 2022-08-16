import { Injectable } from '@nestjs/common';
@Injectable({})
export class AuthService {
  signup(): any {
    return { msg: 'signup - Hello' };
  }

  signin(): any {
    return { msg: 'signin - Hello again' };
  }
}
