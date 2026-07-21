import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('register') //endpoint untuk register user : POST http://localhost:3000/auth/register
    async register(dto: any){
        return this.authService.register(dto);
    }

    @Post('login') //endpoint untuk login user : POST http://localhost:3000/auth/login
    async login(dto: any){
        return this.authService.login(dto);
    }
}
