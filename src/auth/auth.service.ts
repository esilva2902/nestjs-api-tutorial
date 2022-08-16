import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';

import { AuthDto } from './dto';
@Injectable({})
export class AuthService {
  async signup(authDto: AuthDto): Promise<string> {
    // 1. Generate the password hash:
    const pwdHash = await argon2.hash(authDto.password);
    // 2. Save the user to the database:
    console.log(`Password hash => ${pwdHash}`);

    // 3. Return the saved user:
    return pwdHash;
  }

  signin(): any {
    return { msg: 'signin - Hello again' };
  }
}
