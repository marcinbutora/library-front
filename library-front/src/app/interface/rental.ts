export interface Book {
        id: number;
        title: string;
        description: string;
        isbn: string;
    }

    export interface Person {
        id: number;
        firstname: string;
        lastname: string;
        city: string;
        created: Date;
    }

    export interface Rental {
        id: number;
        book: Book;
        person: Person;
        rentedDate: Date;
    }