import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OutputDto } from './dto/output.dto';

@Controller('output')
@ApiTags('Output')
export class OutputController {
  constructor() {}

  // Getting output by id
  @Get('get/:id')
  async getOutputByID(@Param('id') id: string) {
    return await 'this.outputService.getOutputById(id)';
  }

  // Getting output list
  @Get('list')
  async getOutputList() {
    return await 'this.outputService.getOutputList()';
  }

  // Adding a output
  @Post('add')
  async addOutput(@Body() outputDto: OutputDto) {
    return await 'this.outputService.addOutput()';
  }
}
