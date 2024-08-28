import { Component } from '@angular/core';
import {Game} from "../../../core/models/game.model";
import {ActivatedRoute} from "@angular/router";
import {GameService} from "../../../core/services/game.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent {

  game: Game | undefined;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const gameId = this.route.snapshot.paramMap.get('id');
    if (gameId) {
      this.gameService.getGameById(+gameId).subscribe((game: Game) => {
        this.game = game;
      }, (error: any) => {
        console.error('Error fetching game details:', error);
      });
    }
  }


  goBack(): void {
    this.location.back();
  }

}
