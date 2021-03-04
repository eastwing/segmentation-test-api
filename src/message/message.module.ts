import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SEGMENTATION_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'calculator_queue',
        },
      },
    ]),
  ],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
