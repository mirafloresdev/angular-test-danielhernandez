import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameListComponent} from "./features/games/game-list/game-list.component";
import {GameDetailsComponent} from "./features/games/game-details/game-details.component";

const routes: Routes = [
  { path: '', redirectTo: 'games', pathMatch: 'full' },
  { path: 'games', loadChildren: () => import('./features/games/game-list.module').then(m => m.GameListModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
