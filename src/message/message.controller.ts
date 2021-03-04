import { Body, Controller, Post, Res } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageDto } from './messate.dto';

@Controller('message')
export class MessageController {
  constructor(private readonly service: MessageService) {}

  @Post()
  async testMessage(@Body() message: MessageDto) {
    return this.service.testMessage(message);
  }
}
