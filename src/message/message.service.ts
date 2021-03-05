import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MessageDto } from './messate.dto';

@Injectable()
export class MessageService {
  constructor(@Inject('SEGMENTATION_SERVICE') private client: ClientProxy) {}

  async testMessage(pattern: string, message: MessageDto) {
    return new Promise(async (resolve, reject) => {
      this.client
        .send(pattern, message.payload || {})
        .subscribe(resolve, reject);
    });
  }
}
