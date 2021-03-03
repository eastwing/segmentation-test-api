import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MessageDto } from './messate.dto';

@Injectable()
export class MessageService {
    constructor(
        @Inject('SEGMENTATION_SERVICE') private client: ClientProxy
    ) {}

    async testMessage(message: MessageDto) {
        try {
            const pattern = `calculator_condition_getByConditionType`;
            const payload = "603f822d57e2f35c4c886434";
            //const pattern = `${process.env.RMQ_SERVICE_NAME}_conditiongroup_addGroupForSection`;
            const result = await this.client.send(pattern, payload).toPromise();
            return result;
            
        }
        catch (err){
            return err;
        } 
    }
    //Promise<any> {
        // return new Promise<any>(async (resolve, reject) => {
        //     try {
        //         const pattern = `calculator_conditiongroup_addGroupForSection`;
        //         //const pattern = `${process.env.RMQ_SERVICE_NAME}_conditiongroup_addGroupForSection`;
        //         const result = await this.client.send(message.pattern, message.payload);
        //         return resolve(result);
        //     }
        //     catch (err){
        //         return reject(err);
        //     } 
        // })
    //}
}
