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

@Controller('source')
@ApiTags('Source')
export class SourceController {
  constructor(private sourceService: SourceService) {}

  // Getting source by id
  @Get('get/:id')
  getSourceById(@Param('id') id: string): Promise<Source> {
    return this.sourceService.getSourceById(id);
  }

  // Getting source list
  @Get('list')
  getSourceList() {
    return this.sourceService.getSourcelist();
  }

  // Creating a source list
  @Post('add')
  addSource(@Body(ValidationPipe) sourceDto: SourceDto) {
    return this.sourceService.addSource(sourceDto);
  }

  // Updating a source
  @Put('update/:id')
  updateSource(@Param('id') id: number) {
    return this.sourceService.updateSource(id);
  }

  // Deleting a source
  @Delete('remove/:id')
  removeSource(@Param('id') id: number) {
    return this.sourceService.removeSource(id);
  }

  // Updating status of source
  @Patch('update-status')
  updateStatus() {
    return this.sourceService.updateStatus();
  }
}
