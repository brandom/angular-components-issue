import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page.component';
import { TableComponent } from './table.component';

const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'page', component: PageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
