import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { QuoraService } from '../service/quora.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    SearchComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [QuoraService]
})
export class SearchModule { }
