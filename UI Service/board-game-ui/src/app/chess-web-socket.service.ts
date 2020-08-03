import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { webSocket, WebSocketSubject} from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class ChessWebSocketService {

  constructor() { }
  private gameSubject;

  sendMessage(message, x, y, nextx, nexty){

    if (!this.gameSubject){
      const url = 'ws://162.168.1.104:8000/chat/ok'; // 'test/url'; // baseUrl + '/' + gameName + '/' + playMode + '/' + playId + '/';
      this.gameSubject = webSocket(url);
    }

    this.gameSubject.subscribe();

    const messageToSend = JSON.stringify({
      mymessage: message,
      xCoord: x,
      yCoord: y,
      next_xCoord: nextx,
      next_yCoord: nexty,
    });

    // console.log('Message: ' +   messageToSend);
    this.gameSubject.next(messageToSend);

    this.gameSubject.subscribe(
      msg => console.log('Message: ' + msg ),
      err => console.log('Error: ' + err),
      () => console.log('complete')
    );
    console.log('Sent');

    this.gameSubject.complete();
  }


}

