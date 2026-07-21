import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { PrismaService } from 'prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ){}

    // logika register user
    async register(dto : RegisterDto){
        const { username, password, role } = dto;
        const userExist = await this.prisma.user.findUnique({
            where: {username: username}
        });

        if (userExist) {
            throw new Error('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await this.prisma.user.create({
            data: {
                username: username,
                password: hashedPassword,
                role: role
            }
        });
        return {
            message: 'User registered successfully',
            user: {
                username: user.username,
                role: user.role
            }
        };
    }

    async login(dto: LoginDto){
        const user = await this.prisma.user.findUnique({
            where: {username: dto.username}
        });

        if (!user) {
            throw new Error('Invalid credentials');
        }

        const isMatch = await bcrypt.compare(dto.password, user.password);

        if (!isMatch) {
            throw new Error('Invalid credentials');
        }

        const token = this.jwtService.sign({ username: user.username, role: user.role });

        return {
            message: 'Login successful',
            token: token
        };
    }
}
