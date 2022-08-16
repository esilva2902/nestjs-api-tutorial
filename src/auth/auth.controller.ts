import { Body, Controller, Get, Post } from '@nestjs/common';

import { AuthDto } from './dto';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Get('signup')
  async signup(@Body() dto: AuthDto): Promise<string> {
    console.log('AuthDto => ', dto);
    return this.auth.signup(dto);
  }

  @Post('signin')
  signin(): any {
    return this.auth.signin();
  }
}
