import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';


export class TestDTO {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsNumber()
    @IsNotEmpty()
    phone: number;

    @IsDate()
    @IsNotEmpty()
    birthDate: Date;

    @IsBoolean()
    @IsNotEmpty()
    isActive: boolean;
}
