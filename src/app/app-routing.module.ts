import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthsGuard } from './login/auths.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = 
    [

          { path: 'login', component:LoginComponent },
          { path: '', component:LoginComponent },
          { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule), canLoad:[AuthsGuard] },
          { path: 'questions/:id', loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule), canLoad:[AuthsGuard]  },
          { path: '**', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 

    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginComponent]
})
export class AppRoutingModule { }
