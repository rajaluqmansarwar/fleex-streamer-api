import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { EncoderDto } from './dto/encoder.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateEncoderStatusDto } from './dto/updateEncoderStatus.dto';

@Controller('encoder')
@ApiTags('Encoder')
export class EncoderController {
  constructor() {}

  // Get encoder by id
  @Get('get/:id')
  async getEncoderById(@Param('id') id: string) {
    return await 'this.encoderService.getEncoderById(id)';
  }

  // Get encoder list
  @Get('list')
  async getEncoderList() {
    return await 'this.encoderService.getEncoderList()';
  }

  // Add a encoder
  @Post('add')
  async addEncoder(@Body() encoderDto: EncoderDto) {
    return await 'this.encoderService.addEncoder(encoderDto)';
  }

  // Updating a encoder
  @Put('update/:id')
  async updateEncoderById(@Param('id') id: string) {
    return await 'this.encoderService.updateEncoderById(id)';
  }

  // Deleting a encoder by id
  @Delete('remove/:id')
  async removeEncoder() {
    return await 'this.encoderService.removeEncoder(id)';
  }

  // Updating a status of encoder by id(from body)
  @Patch('update-status')
  async updateEncoder(@Body() updateEncoderStatusDto: UpdateEncoderStatusDto) {
    return await 'this.encoderService.updateEncoder(updateEncoderStatusDto)';
  }
}
