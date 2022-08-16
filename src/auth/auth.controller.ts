import { Body, Controller, Get, Post } from '@nestjs/common';

import { AuthDto } from './dto';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Get('signup')
  signup(@Body() dto: AuthDto): any {
    console.log('AuthDto => ', dto);
    return this.auth.signup();
  }

  @Post('signin')
  signin(): any {
    return this.auth.signin();
  }
}
