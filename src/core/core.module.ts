import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StarWarsService } from './services/star-wars.service';
import { BaseService } from './services/base.service';
// UI Framework imports

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
    //Ui Imports
  ],
  exports: [HttpClientModule, StarWarsService],
  providers: [StarWarsService],
  declarations: []
})
export class CoreModule { }
