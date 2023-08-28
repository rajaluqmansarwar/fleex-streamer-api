import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type EncoderDocument = Encoder & Document;
@Schema({ timestamps: true })
export class Encoder {
  @Prop()
  source: string;

  @Prop()
  encoding: string;

  @Prop()
  online: boolean;

  @Prop()
  enabled: boolean;

  @Prop()
  hasAudio: boolean;

  @Prop()
  hasVideo: boolean;

  @Prop()
  codecAudio: string;

  @Prop()
  codecVideo: string;

  @Prop()
  audioBitrate: number;

  @Prop()
  videoBitrate: number;

  @Prop()
  width: number;

  @Prop()
  height: number;
}

export const EncoderSchema = SchemaFactory.createForClass(Encoder);
