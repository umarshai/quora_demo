import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { QuoraService } from '../service/quora.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    QuestionsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    HttpClientModule
  ],
  providers: [QuoraService]
})
export class QuestionsModule { }
