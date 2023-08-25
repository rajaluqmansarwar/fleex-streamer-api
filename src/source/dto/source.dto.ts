import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SourceDto {
  @ApiProperty()
  @IsString()
  protocol: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsString()
  port: string;

  @ApiProperty()
  @IsString()
  nic: string;
}
