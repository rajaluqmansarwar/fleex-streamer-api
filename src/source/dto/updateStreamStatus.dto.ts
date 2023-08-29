import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateStatusStreamDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  enable: boolean;
}
