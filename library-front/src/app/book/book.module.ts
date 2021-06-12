import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookUpdateComponent } from './components/book-update/book-update.component';

@NgModule({
    declarations: [
        BookAddComponent,
        BookDetailsComponent,
        BookUpdateComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class BookModule {}