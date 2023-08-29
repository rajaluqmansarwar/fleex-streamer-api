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
import { ApiTags } from '@nestjs/swagger';
import { OutputDto } from './dto/output.dto';
import { Output } from './schema/output.schema';
import { OutputService } from './output.service';
import { UpdateOutputStatusDto } from './dto/updateOutputStatus.dto';

@Controller('output')
@ApiTags('Output')
export class OutputController {
  constructor(private outputService: OutputService) {}

  // Getting output by id
  @Get('get/:id')
  async getOutputById(@Param('id') id: string) {
    return await this.outputService.getOutputById(id);
  }

  // Getting output list
  @Get('list')
  async getOutputList() {
    return await this.outputService.getOutputList();
  }

  // Adding a output
  @Post('add')
  async addOutput(@Body() outputDto: OutputDto) {
    return await this.outputService.addOutput(outputDto);
  }

  // Updating a output by id
  @Put('update/:id')
  async updateOutputById(
    @Param('id') id: string,
    @Body() outputDto: OutputDto,
  ) {
    return await this.outputService.updateOutputById(id, outputDto);
  }

  // Deleting a output
  @Delete('remove/:id')
  async removeOutput(@Param('id') id: string) {
    return await this.outputService.removeOutput(id);
  }

  // Updating status of the output
  @Patch('update-status')
  async updateOutputStatus(
    @Body() updateOutputStatusDto: UpdateOutputStatusDto,
  ) {
    return await this.outputService.updateOutputStatus(updateOutputStatusDto);
  }
}
