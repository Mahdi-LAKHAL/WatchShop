import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Contact } from '../models/contact';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
constructor(private http: HttpClient) { }
private contactUrl = 'api/contacts';
// Log function for Console
private log(log: string) {
  console.info(log);
}
// Handle Error
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.log(error);
    console.log('${operation} failed: ${error.message}');
    return of(result as T);
  };
}
//Return all contacts 
getContact(): Observable<Contact[]> {
  return this.http.get<Contact[]>(this.contactUrl).pipe(
    tap(_ => this.log('fetched contact')),
    catchError(this.handleError('get Contacts', []))
  );
}
// Delete Contact
  deleteContact(contact: Contact): Observable<Contact> {
    const url = `${this.contactUrl}/${contact.id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    };
    return this.http.delete<Contact>(url, httpOptions).pipe(
      tap(_ => this.log(`delete montre id= ${contact.id}`)),
      catchError((this.handleError<any>('Delete contact')))
    );
  }
// Add Contact
addContact(contact: Contact): Observable<Contact> {
  const url = `${this.contactUrl}`;
  const httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  };
  return this.http.post<Contact>(url, contact, httpOptions).pipe(
    tap(_ => this.log(`ajouter montre id= ${contact.id}`)),
    catchError((this.handleError<any>('ajouter contact')))
  );
}
// // Display Montre by Id
// displayMontre(id: number): Observable<Montre> {
//   const url = `${this.montreUrl}/${id}`;
//   const httpOptions = {
//     headers: new HttpHeaders({ 'content-type': 'application/json' })
//   };
//   return this.http.get<Montre>(url, httpOptions).pipe(
//     tap(_ => this.log(`display montre id= ${id}`)),
//     catchError((this.handleError<any>('display montre')))
//   );
// }
// updateMontre(montre: Montre): Observable<Montre> {
//   const httpOptions = {
//     headers: new HttpHeaders({ 'content-Type': 'application/json'})
//   };
//   return this.http.put(this.montreUrl, montre, httpOptions).pipe(
//     tap(_ => this.log(`updated montre id=${montre.id}`)),
//     catchError(this.handleError<any>('updated montre'))
//   );
// }
// searchMontre(term: string): Observable <Montre[]> {
//   if (!term.trim()){
//    return of([]);
//  }
//  return this.http.get<Montre[]>(`${this.montreUrl}/?marque=${term}`).pipe(
//  tap(_ => this.log(`found montres matching "${term}"`)),
//  catchError(this.handleError<Montre []>('search montres', []))
//  );
// }
}