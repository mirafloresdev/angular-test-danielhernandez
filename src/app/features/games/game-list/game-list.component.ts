import { Component } from '@angular/core';
import {Game} from "../../../core/models/game.model";
import {GameService} from "../../../core/services/game.service";
import {combineLatest, debounceTime, map, Observable, startWith, Subject} from "rxjs";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent {
  games: Game[] = [];
  filteredGamesList: Game[] = [];
  searchTerm: string = '';
  selectedGenre: string = '';
  selectedPlatform: string = '';
  gridCols: number | undefined;
  games$: Observable<Game[]> | undefined;
  searchTerm$ = new Subject<string>();
  selectedGenre$ = new Subject<string>();
  selectedPlatform$ = new Subject<string>();

  genres: string[] = ['Shooter', 'MMORPG', 'MOBA', 'Racing', 'Sports', 'Fighting'];
  platforms: string[] = ['PC', 'Browser', 'Console'];

  constructor(private gameService: GameService) {
    this.gridCols = this.calculateCols(window.innerWidth);
  }

  ngOnInit(): void {
    const games$ = this.gameService.getGames();

    this.games$ = combineLatest([
      this.searchTerm$.pipe(startWith(''), debounceTime(300)),
      this.selectedGenre$.pipe(startWith('')),
      this.selectedPlatform$.pipe(startWith('')),
      games$
    ]).pipe(
      map(([searchTerm, genre, platform, games]) => {
        return games.filter(game =>
          game.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (genre ? game.genre === genre : true) &&
          (platform ? game.platform === platform : true)
        );
      })
    );
  }

  filteredGames(): Game[] {
    return this.games.filter(game =>
      game.title.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.selectedGenre ? game.genre === this.selectedGenre : true) &&
      (this.selectedPlatform ? game.platform === this.selectedPlatform : true)
    );
  }

  private calculateCols(width: number): number {
    if (width >= 1200) {
      return 4;
    } else if (width >= 768) {
      return 2;
    } else {
      return 1;
    }
  }





}
