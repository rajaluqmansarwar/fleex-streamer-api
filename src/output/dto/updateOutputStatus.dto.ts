import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class UpdateOutputStatusDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  enable: boolean;
}
