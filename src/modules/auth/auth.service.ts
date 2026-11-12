import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto.js';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService){}

    login(credenciales: LoginAuthDto){

        let payload={email:"admin@gmail.com", id:1}  //ojo las comillas dobles son importantes para que el token se genere correctamente
        const token= this.jwtService.sign(payload)
        return {token: token};
    }
}

