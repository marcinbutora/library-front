import { Book } from "./book";
import { Person } from "./person";

export interface Rental {
    id: number;
    book_id: Book;
    person_id: Person;
    rentedDate: Date;
}