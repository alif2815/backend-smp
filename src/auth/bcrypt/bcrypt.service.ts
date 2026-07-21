import * as bcrypt from 'bcrypt';

export class BcryptService {
    constructor(private readonly salt: number = 10) { }

    async hash(password: string): Promise<string> {
        return await bcrypt.hash(password, this.salt);
    }

    async compare(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash);
    }
}