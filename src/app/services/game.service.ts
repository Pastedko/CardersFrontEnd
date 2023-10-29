import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Game } from '../game';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  _checkCardsUrl="https://carders-app.onrender.com/allowed";
  _getGamesOfUser="https://carders-app.onrender.com/getUserGames"
  _gameFinished="https://carders-app.onrender.com/gameFinished"
  constructor(private http:HttpClient,private router:Router,private socket:Socket) { }

  isAllowed(card:any,hand:any[],game:any){
    return this.http.post<any>(this._checkCardsUrl,{card:card,hand:hand,game:game});
  }
  getGamesOfUser(user:User){
    return this.http.post<any>(this._getGamesOfUser,{user:user});
  }
  gameFinished(game:any|Game,user:any|User){
    return this.http.post<any>(this._gameFinished,{game:game,user:user});
  }
}
