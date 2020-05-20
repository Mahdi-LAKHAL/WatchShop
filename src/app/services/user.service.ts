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
  private adminUrl = 'http://localhost:3000/api/user/';
 
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
    //Sign up for a new User
  addUser(user: User): Observable<User> {
    const url = `${this.adminUrl}signup`;
    return this.http.post<User>(url, user).pipe(
      tap(_ => this.log(`ajouter user id= ${user._id}`)),
      catchError((this.handleError<any>('ajouter user')))
    );
  }
   // Display User by Id
   displayUser(id: number): Observable<User> {
    const url = `${this.adminUrl}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    };
    return this.http.get<User>(url, httpOptions).pipe(
      tap(_ => this.log(`display user id= ${id}`)),
      catchError((this.handleError<any>('display user')))
    );
  }
   // Update User by Id
  updateUser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({ 'content-Type': 'application/json'})
    };
    return this.http.put(this.adminUrl, user, httpOptions).pipe(
      tap(_ => this.log(`updated user id=${user._id}`)),
      catchError(this.handleError<any>('updated user'))
    );
  }
   // Search User by Id
  searchUSer(term: string): Observable <User[]> {
    if (!term.trim()){
     return of([]);
   }
   return this.http.get<User[]>(`${this.adminUrl}/?fName=${term}`).pipe(
   tap(_ => this.log(`found user matching "${term}"`)),
   catchError(this.handleError<User []>('search montres', []))
   );
  }
  // Delete User
  deleteUser(user: User): Observable<User> {
    const url = `${this.adminUrl}/${user._id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    };
    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_ => this.log(`delete user id= ${user._id}`)),
      catchError((this.handleError<any>('Delete user')))
    );
  }


  // Signin 

login(user:any){
console.log("Here in login service", user);
const url= `${this.adminUrl}signin`; 
console.log("my url", url);

this.http.post(url, user).subscribe(
  res => {
  console.log("res",res);
  
  }
);

}
}


  


