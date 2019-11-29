import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WsResponse,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class AppGateway implements OnGatewayInit {
  private logger: Logger = new Logger('AppGateway');
  afterInit(server: any) {
    this.logger.log('Initialized!');
  }
  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, text: string): WsResponse<string> {
    // client.emit('msgToClient', text)
    return { event: 'msgToClient', data: text };
  }
}
