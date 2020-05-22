import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../models/User';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  private adminUrl = 'http://localhost:3000/api/user/';

  // Authentification Variables 

  private token: string;
  private isUserAuthenticated = false;
  private authStatusListener = new Subject<boolean>();
  private tokenTimer: any;

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
      headers: new HttpHeaders({ 'content-Type': 'application/json' })
    };
    return this.http.put(this.adminUrl, user, httpOptions).pipe(
      tap(_ => this.log(`updated user id=${user._id}`)),
      catchError(this.handleError<any>('updated user'))
    );
  }
  // Search User by Id
  searchUSer(term: string): Observable<User[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<User[]>(`${this.adminUrl}/?fName=${term}`).pipe(
      tap(_ => this.log(`found user matching "${term}"`)),
      catchError(this.handleError<User[]>('search montres', []))
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

  login(user: any) {
    console.log("Here in login service", user);
    const url = `${this.adminUrl}signin`;
    console.log("my url", url);

    return this.http.post<{ token: string, expiresIn: number }>(url, user).subscribe(
      res => {
        console.log("res", res);
        const token = res.token;
        this.token = token;
        if (token) {
          const expiresInDuration = res.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isUserAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          this.saveAuthData(token, expirationDate);
          this.router.navigate(['/dashboard']);
        }
      }
    );
  }

  getToken() {
    return this.token;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  isUserAuth() {
    return this.isUserAuthenticated;
  }
  autoAuthUser() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    if (!token || !expirationDate) {
      return;
    }
    const now = new Date();
    const expiresIn = new Date(expirationDate).getTime() - now.getTime();

    console.log("expiresIn", expiresIn);


    if (expiresIn) {
      this.token = token;
      this.isUserAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  logout() {
    this.clearAuthData();
    this.isUserAuthenticated = false;
    this.authStatusListener.next(false);
    this.router.navigate(['/']);
    clearTimeout(this.tokenTimer);

  }
  private setAuthTimer(duration: number) {
    console.log('Set Timer', duration);

    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }
  private saveAuthData(token: string, expirationDate: Date) {
    localStorage.setItem('token', 'Bearer ' + token);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }
  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }


}





