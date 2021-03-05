import { Body, Controller, Post, Req } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageDto } from './messate.dto';

@Controller('message')
export class MessageController {
  constructor(private readonly service: MessageService) {}

  @Post(':pattern')
  async testMessage(@Body() message: MessageDto, @Req() request) {
    return this.service.testMessage(request.params.pattern, message);
  }
}
