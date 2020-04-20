import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  private adminUrl = 'api/users';
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
  //Return all users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.adminUrl).pipe(
      tap(_ => this.log('fetched user')),
      catchError(this.handleError('get user', []))
    );
  }
  // addUser(montre: User): Observable<User> {
  //   const url = `${this.adminUrl}`;
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'content-type': 'application/json' })
  //   };
  //   return this.http.post<User>(url, montre, httpOptions).pipe(
  //     tap(_ => this.log(`ajouter user id= ${users.id}`)),
  //     catchError((this.handleError<any>('ajouter user')))
  //   );
  // }
  }