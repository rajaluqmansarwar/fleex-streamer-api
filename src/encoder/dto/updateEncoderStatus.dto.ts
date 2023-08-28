import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class UpdateEncoderStatusDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  enable: true;
}
