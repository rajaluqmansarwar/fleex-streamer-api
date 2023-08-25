import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Patch,
} from '@nestjs/common';
import { SourceDto } from './dto/source.dto';

@Controller('source')
export class SourceController {
  // Getting source by id
  @Get('get/:id')
  getSourceById(@Param('id') id: number) {
    return 'this controller gets source by ID using getSourceById service';
  }

  // Getting source list
  @Get('get/:id')
  getSourceList() {
    return 'this controller gets list of sources using getSourceById service';
  }

  // Creating a source list
  @Post('add')
  addSource(@Body() sourceDto: SourceDto) {
    return 'this controller creates a source using addSource service';
  }

  // Updating a source
  @Put('update/:id')
  updateSource(@Param('id') id: number) {
    return 'this controller updates a source by id using a updateSource service';
  }

  // Deleting a source
  @Delete('remove/:id')
  removeSource(@Param('id') id: number) {
    return 'this controller will delete a source using a removeSource service';
  }

  // Updating status of source
  @Patch('update-status')
  updateStatus() {
    return 'this controller updates the status of source using updateStatus service';
  }
}
