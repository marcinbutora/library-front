import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { PersonListComponent } from './components/person-list/person-list.component';

const routes: Routes = [
  { path: 'readers', component: PersonListComponent },
  { path: 'books', component: BookListComponent },
  { path: '',   redirectTo: '/readers', pathMatch: 'full' },
  { path: '**', redirectTo: '/readers' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
