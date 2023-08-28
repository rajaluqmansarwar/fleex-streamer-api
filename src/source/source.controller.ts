import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Patch,
  ValidationPipe,
} from '@nestjs/common';
import { SourceDto } from './dto/source.dto';
import { SourceService } from './source.service';
import { ApiTags } from '@nestjs/swagger';
import { Source } from './schema/source.schema';
import { Request } from 'express';
import { UpdateStatusStreamDto } from './dto/updateStreamStatus.dto';

@Controller('source')
@ApiTags('Source')
export class SourceController {
  constructor(private sourceService: SourceService) {}

  // Getting source by id
  @Get('get/:id')
  async getSourceById(@Param('id') id: string): Promise<Source> {
    return await this.sourceService.getSourceById(id);
  }

  // Getting source list
  @Get('list')
  async getSourceList(): Promise<Source[]> {
    return await this.sourceService.getSourcelist();
  }

  // Creating a source list
  @Post('add')
  async addSource(@Body(ValidationPipe) sourceDto: SourceDto): Promise<Source> {
    return await this.sourceService.addSource(sourceDto);
  }

  // Updating a source
  @Put('update/:id')
  async updateSource(
    @Param('id') id: string,
    @Body(ValidationPipe) sourceDto: SourceDto,
  ) {
    return await this.sourceService.updateSource(id, sourceDto);
  }

  // Deleting a source
  @Delete('remove/:id')
  async removeSource(@Param('id') id: string) {
    return await this.sourceService.removeSource(id);
  }

  // Updating status of source
  @Patch('update-status')
  async updateStatus(
    @Body(ValidationPipe) updateStatusStreamDto: UpdateStatusStreamDto,
  ) {
    return await this.sourceService.updateStatus(updateStatusStreamDto);
  }
}
