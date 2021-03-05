import { IsOptional } from 'class-validator';

export class MessageDto {
  @IsOptional()
  payload: any;
}
