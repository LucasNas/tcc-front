import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTabComponent } from './home-tab/home-tab.component';
import { HostsTabComponent } from './hosts-tab/hosts-tab.component';
import { ItensTabComponent } from './itens-tab/itens-tab.component';
import { TemplatesTabComponent } from './templates-tab/templates-tab.component';

const routes: Routes = [
  { path: 'home', component: HomeTabComponent },
  { path: 'hosts', component: HostsTabComponent },
  { path: 'templates', component: TemplatesTabComponent },
  { path: 'itens', component: ItensTabComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
