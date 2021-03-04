import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MessageDto } from './messate.dto';

@Injectable()
export class MessageService {
  constructor(@Inject('SEGMENTATION_SERVICE') private client: ClientProxy) {}

  async testMessage(message: MessageDto) {
    return new Promise(async (resolve, reject) => {
      this.client.send(message.pattern, message.payload).subscribe((data) => {
        return resolve(data);
      }, reject);
    });
  }
}
