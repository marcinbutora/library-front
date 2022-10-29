import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export function handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.log('An error occurred:', error.error);
    } else {
      console.log(
        `Backend returned code ${error.status}, ` + `body was: ${error.message}`
      );
    }
    return throwError(`${error.message}\n${error.status}`);
}
