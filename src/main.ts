import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';


async function bootstrap() {
    const app = await NestFactory.create(AppModule);

//     const microservice = app.connectMicroservice(
//     {
//         transport: Transport.RMQ,
//         options: {
//             urls: [`amqp://localhost:5673`],
//             queue: 'my_queue',
//             queueOptions: { durable: false },
//         }
//     });

//   await app.startAllMicroservicesAsync();
  await app.listen(3000);
}
bootstrap();
