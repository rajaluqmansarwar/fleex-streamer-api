import { Injectable } from '@nestjs/common';
import { SourceDto } from './dto/source.dto';
import { Source, SourceDocument } from './schema/source.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SourceService {
  constructor(
    @InjectModel(Source.name) private sourceModel: Model<SourceDocument>,
  ) {}

  // Getting source by id service
  async getSourceById(id: string): Promise<Source> {
    return await this.sourceModel.findById({ _id: id });
  }

  // Getting source list service
  getSourcelist(): Promise<Source[]> {
    return this.sourceModel.find();
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
    source.createdAt = new Date().toLocaleDateString();
    source.updatedAt = '';
    return source.save();
  }

  // Updating source by id service
  updateSource(id: number) {
    return 'Updated source';
  }

  // Removing source by id service
  removeSource(id: number) {
    return 'Source removed';
  }

  // Updating source status service
  updateStatus() {
    return 'Source status updated';
  }
}
