import { IsEnum, IsString } from 'class-validator';
import { protocol, streams } from '../enum/output.enum';
import { ApiProperty } from '@nestjs/swagger';

export class OutputDto {
  @ApiProperty({ enum: protocol })
  //   @IsEnum(protocol)
  @IsString()
  protocol: string;
  //   @ApiProperty({ enum: streams })
  //   @IsEnum(streams)
  //   @IsString()
  //   streams: streams[];
}
