import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SourceDto } from './dto/source.dto';
import { Source, SourceDocument } from './schema/source.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateStatusStreamDto } from './dto/updateStreamStatus.dto';

@Injectable()
export class SourceService {
  constructor(
    @InjectModel(Source.name) private sourceModel: Model<SourceDocument>,
  ) {}

  // Getting source by id service
  async getSourceById(id: string): Promise<Source> {
    const encoder = await this.sourceModel.findById({ _id: id });
    if (!encoder) {
      throw new UnauthorizedException('No source available');
    }
    return encoder;
  }

  // Getting source list service
  async getSourcelist(): Promise<Source[]> {
    return await this.sourceModel.find();
  }

  // Adding source service
  addSource(sourceDto: SourceDto): Promise<Source> {
    const source = new this.sourceModel();
    source.protocol = sourceDto.protocol;
    source.url = 'http://127.0.0.1/live/stream.m3u8';
    source.path = '/live/stream.mp4';
    source.address = sourceDto.address;
    source.port = sourceDto.port;
    source.nic = sourceDto.nic;
    source.online = false;
    source.enabled = true;
    source.hasAudio = false;
    source.hasVideo = false;
    source.codecAudio = 'Example codec Audio';
    source.codecVideo = 'Example codec Video';
    source.width = 0;
    source.height = 0;
    return source.save();
  }

  // Updating source by id service
  async updateSource(id: string, sourceDto: SourceDto) {
    const source = await this.sourceModel.findById(id);
    if (!source) {
      throw new UnauthorizedException('Source not found');
    }
    return await this.sourceModel.updateOne(
      { _id: id },
      {
        protocol: sourceDto.protocol,
        address: sourceDto.address,
        port: sourceDto.port,
        nic: sourceDto.nic,
      },
    );
  }

  // Removing source by id service
  async removeSource(id: string) {
    const source = await this.sourceModel.findById(id);
    if (!source) {
      throw new UnauthorizedException('Source not found');
    }
    return await this.sourceModel.deleteOne({ _id: id });
  }

  // Updating source status service
  async updateStatus(updateStatusStreamDto: UpdateStatusStreamDto) {
    const source = await this.sourceModel.findById(updateStatusStreamDto.id);
    if (!source) {
      throw new UnauthorizedException('Source not found');
    }
    return await this.sourceModel.updateOne(
      { _id: updateStatusStreamDto.id },
      {
        enabled: updateStatusStreamDto.enable,
      },
    );
  }
}
