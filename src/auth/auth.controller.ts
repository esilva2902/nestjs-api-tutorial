import { Controller, Get, Post } from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Get('signup')
  signup(): any {
    return this.auth.signup();
  }

  @Post('signin')
  signin(): any {
    return this.auth.signin();
  }
}
