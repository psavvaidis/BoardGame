import { Component, OnInit } from '@angular/core';
import { ChessWebSocketService } from '../chess-web-socket.service';
import { TestApiService } from '../test-api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  testForm;
  users;

  constructor(
    private wsService: ChessWebSocketService,
    private api: TestApiService,
    private formBuilder: FormBuilder
  ) {
    this.testForm = this.formBuilder.group({
      message: '',
      xCoord: '',
      yCoord: '',
      nextxCoord: '',
      nextyCoord: ''
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  sendMsg(data){
    this.wsService.sendMessage(
      data.message,
      data.xCoord,
      data.yCoord,
      data.nextxCoord,
      data.nextyCoord
    );
  }

  getUsers = () =>
    this.api.apiGetUsers().subscribe(
    data => {
      this.users = data;
    },
    error => {
      console.log('Error caught at httpGet');
    }
  )
}
