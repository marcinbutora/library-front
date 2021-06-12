import { Book } from "src/app/book/models/book";
import { Person } from "src/app/person/model/person";

export interface Rental {
    id: number;
    book: Book;
    person: Person;
    rentedDate: Date;
}