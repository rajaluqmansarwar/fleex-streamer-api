import { Injectable, UnauthorizedException } from '@nestjs/common';
import { OutputDto } from './dto/output.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Output, OutputDocument } from './schema/output.schema';
import { Model } from 'mongoose';
import { UpdateOutputStatusDto } from './dto/updateOutputStatus.dto';

@Injectable()
export class OutputService {
  constructor(
    @InjectModel(Output.name) private outputModel: Model<OutputDocument>,
  ) {}

  // Getting output by id
  async getOutputById(id: string) {
    const output = await this.outputModel.findById(id);
    if (!output) {
      throw new UnauthorizedException('No output found');
    }
    return output;
  }

  // Getting output list
  async getOutputList() {
    return await this.outputModel.find();
  }

  // Adding a output
  async addOutput(outputDto: OutputDto) {
    const output = new this.outputModel();
    output.protocol = outputDto.protocol;
    output.streams = outputDto.streams;
    output.url = 'http://127.0.0.1/live/stream.m3u8';
    output.address = '127.0.0.1';
    output.port = '1234';
    output.online = false;
    output.enabled = true;
    output.hasAudio = false;
    output.hasVideo = false;
    output.codecAudio = 'string';
    output.codecVideo = 'string';
    output.width = 0;
    output.height = 0;
    return output.save();
  }

  // Updating a output by id
  async updateOutputById(id: string, outputDto: OutputDto) {
    const output = await this.outputModel.findById(id);
    if (!output) {
      throw new UnauthorizedException('No output found');
    }
    return await this.outputModel.updateOne(
      { _id: id },
      { protocol: outputDto.protocol, streams: outputDto.streams },
    );
  }

  // Deleting a output
  async removeOutput(id: string) {
    const output = await this.outputModel.findById(id);
    if (!output) {
      throw new UnauthorizedException('No output found');
    }
    return await this.outputModel.deleteOne({ _id: id });
  }

  // Updating status of the output
  async updateOutputStatus(updateOutputStatusDto: UpdateOutputStatusDto) {
    const output = await this.outputModel.findById(updateOutputStatusDto.id);
    if (!output) {
      throw new UnauthorizedException('No output found');
    }
    return await this.outputModel.updateOne(
      { _id: updateOutputStatusDto.id },
      { enabled: updateOutputStatusDto.enable },
    );
  }
}
