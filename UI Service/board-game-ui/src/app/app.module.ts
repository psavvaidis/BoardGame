import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessComponent } from './chess/chess.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TictactoecellDirective } from './tictactoe/tictactoecell.directive';
import { AppSelect } from './chess/appselect';
import { MovePawnDirective } from './chess/move-pawn.directive';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ChessComponent,
    TictactoeComponent,
    HomeComponent,
    LoginComponent,
    TictactoecellDirective,
    AppSelect,
    MovePawnDirective,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
