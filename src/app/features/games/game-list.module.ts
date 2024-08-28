import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameListRoutingModule } from './game-list-routing.module';
import { GameListComponent } from './game-list/game-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../../shared/modules/material/material.module";
import {GameDetailsComponent} from "./game-details/game-details.component";


@NgModule({
  declarations: [
    GameListComponent,
    GameDetailsComponent
  ],
  imports: [
    CommonModule,
    GameListRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
  ],

})
export class GameListModule { }
