import {Book} from './book';
import {Person} from './person';

export interface Rental {
    id: number;
    book: Book;
    person: Person;
    rentedDate: Date;
}