import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class MessageDto {
    @IsNotEmpty()
    @IsString()
    pattern: string;

    @IsOptional()
    payload: any;
}