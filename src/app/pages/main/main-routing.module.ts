import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
//import { AuthGuard } from 'src/app/guards/auth.guard';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
