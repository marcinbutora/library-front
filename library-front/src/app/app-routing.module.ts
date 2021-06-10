import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './components/book-add/book-add.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookUpdateComponent } from './components/book-update/book-update.component';
import { PersonAddComponent } from './components/person-add/person-add.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonUpdateComponent } from './components/person-update/person-update.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { RentalListComponent } from './components/rental-list/rental-list.component';

const routes: Routes = [
  { path: 'readers', component: PersonListComponent },
  { path: 'books', component: BookListComponent },
  { path: 'rentals', component: RentalListComponent},
  { path: 'rental/add', component: RentalAddComponent},
  { path: 'reader/add', component: PersonAddComponent },
  { path: 'book/add', component: BookAddComponent},
  { path: 'reader/update/:id', component: PersonUpdateComponent},
  { path: 'book/update/:id', component: BookUpdateComponent},
  { path: 'reader/details/:id', component: PersonDetailsComponent},
  { path: 'book/details/:id', component: BookDetailsComponent},
  { path: '',   redirectTo: '/readers', pathMatch: 'full' },
  { path: '**', redirectTo: '/readers' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
