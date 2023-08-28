import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Encoder, EncoderDocument } from './schema/encoder.schema';
import { Model } from 'mongoose';
import { EncoderDto } from './dto/encoder.dto';
import { UpdateEncoderStatusDto } from './dto/updateEncoderStatus.dto';

@Injectable()
export class EncoderService {
  constructor(
    @InjectModel(Encoder.name) private encoderModel: Model<EncoderDocument>,
  ) {}

  // Getting encoder by id
  async getEncoderById(id: string): Promise<Encoder> {
    const encoder = await this.encoderModel.findById({ _id: id });
    if (!encoder) {
      throw new UnauthorizedException('Encoder not available');
    }
    return encoder;
  }

  // Getting encoder list
  async getEncoderList() {
    return await this.encoderModel.find();
  }

  //  Adding a encoder
  async addEncoder(encoderDto: EncoderDto): Promise<Encoder> {
    // console.log(encoderDto.source);
    // const encoder = new this.encoderModel();
    // encoder.source = encoderDto.source;
    // encoder.encoding = encoderDto.encoding;
    // encoder.online = false;
    // encoder.enabled = true;
    // encoder.hasAudio = false;
    // encoder.hasVideo = false;
    // encoder.codecAudio = encoderDto.codecAudio;
    // encoder.codecVideo = encoderDto.codecVideo;
    // encoder.audioBitrate = encoderDto.audioBitrate;
    // encoder.videoBitrate = encoderDto.videoBitrate;
    // encoder.width = encoderDto.width;
    // encoder.height = encoderDto.height;
    // console.log(encoder.source);
    // console.log(encoder.encoding);
    // console.log(encoder.online);
    // console.log(encoder);
    console.log(encoderDto.source);
    const encoder = await new this.encoderModel();
    encoder.source = encoderDto.source;
    encoder.encoding = encoderDto.encoding;
    encoder.online = false;
    encoder.enabled = true;
    encoder.hasAudio = false;
    encoder.hasVideo = false;
    encoder.codecAudio = encoderDto.codecAudio;
    encoder.codecVideo = encoderDto.codecVideo;
    encoder.audioBitrate = encoderDto.audioBitrate;
    encoder.videoBitrate = encoderDto.videoBitrate;
    encoder.width = encoderDto.width;
    encoder.height = encoderDto.height;
    console.log(encoder.source);
    console.log(encoder.encoding);
    console.log(encoder.online);
    console.log(encoder);
    return await encoder.save();
  }

  // Updating encoder by id
  async updateEncoderById(id: string, encoderDto: EncoderDto) {
    const encoder = await this.encoderModel.findById(id);
    if (!encoder) {
      throw new UnauthorizedException('No encoder found');
    }
    return await this.encoderModel.updateOne(
      { _id: id },
      {
        source: encoderDto.source,
        encoding: encoderDto.encoding,
        codecAudio: encoderDto.codecAudio,
        audioBitrate: encoderDto.audioBitrate,
        videoBitrate: encoderDto.videoBitrate,
        codecVideo: encoderDto.codecVideo,
        height: encoderDto.height,
        width: encoderDto.width,
      },
    );
  }

  //  Deleting a encoder by id
  async removeEncoder(id: string) {
    const encoder = await this.encoderModel.findById(id);
    if (!encoder) {
      throw new UnauthorizedException('No encoder found');
    }
    return this.encoderModel.deleteOne({ _id: id });
  }

  // Updating encoder by id
  async updateEncoder(updateEncoderStatusDto: UpdateEncoderStatusDto) {
    const encoder = await this.encoderModel.findById(updateEncoderStatusDto.id);
    if (!encoder) {
      throw new UnauthorizedException('No encoder found');
    }
    return await this.encoderModel.updateOne(
      { _id: updateEncoderStatusDto.id },
      {
        enabled: updateEncoderStatusDto.enable,
      },
    );
  }
}
