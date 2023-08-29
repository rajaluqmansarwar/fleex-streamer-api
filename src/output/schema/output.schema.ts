import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type OutputDocument = Output & Document;

@Schema({ timestamps: true })
export class Output {
  @Prop()
  protocol: string;

  @Prop()
  streams: string[];

  @Prop()
  url: string;

  @Prop()
  address: string;

  @Prop()
  port: string;

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
  width: number;

  @Prop()
  height: number;
}

export const OutputSchema = SchemaFactory.createForClass(Output);
