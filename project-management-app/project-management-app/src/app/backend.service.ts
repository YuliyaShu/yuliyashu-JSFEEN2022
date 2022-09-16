import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { BehaviorSubject } from 'rxjs';

export interface SignUpFields {
  name: string | null,
  login: string | null,
  password: string | null,
}

export interface SignUpResponse {
  id: string,
  login: string,
  name: string,
}

export interface LogInFields {
  login: string | null | undefined,
  password: string | null | undefined,
}

export interface LogInResponse {
  token: string,
}

export interface BoardResponse {
  id: string,
  title: string,
  description: string,
}

export interface NewBoardFields {
  description: string,
  title: string,
}

export interface ColumnResponse {
  id:	string,
  title:	string,
  order:	number
}

export interface NewColumnFields {
  title:	string,
  order:	number,
}

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  url = 'https://pmasearch.herokuapp.com';
  usersPath = '/users';
  signUpPath = '/signup';
  logInPath = '/signin';
  boardsPath = '/boards';
  columnsPath = '/columns';
  isLogInFromStorage = !!Number(localStorage.getItem('isLogIn'));
  isLogIn$ = new BehaviorSubject(this.isLogInFromStorage);
  token = localStorage.getItem('token');

  constructor(private http: HttpClient) { }

  public getUsers() {
    return this.http
    .get(this.url + this.usersPath)
    .pipe(
      map(value => {
        return value;
      }),
      catchError((err) => {
        if (err.status === 401) {
          return of({unAuthorized: true})
        }
      return of({anotherError: true})
      })
    );
  }

  public getUser(id: string, token: string) {
    return this.http
    .get(this.url + this.usersPath + '/' + id, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .pipe(
      map(value => {
        return value;
      }),
      catchError((err) => {
        if (err.status === 401) {
          return of({unAuthorized: true})
        }
        return of({anotherError: true})
      })
    );
  }

  public signUp(data: SignUpFields) {
     return this.http.post<SignUpResponse>(this.url + this.signUpPath, data, {
      headers: { 'Content-Type': 'application/json' },
     })
     .pipe(
      map(value => {
        this.isLogIn$.next(true);
        localStorage.setItem('isLogIn', '1');
        localStorage.setItem('id', value.id);
        return value;
      }),
      catchError((err) => {
        if (err.status === 0) {
          return of({noConnection: true})
        }
        if (err.status === 409) {
          return of({userIsExist: true})
        }
        return of({anotherError: true})
      })
     )
  }

  public logIn(data: LogInFields) {
     return this.http.post<LogInResponse>(this.url + this.logInPath, data, {
      headers: { 'Content-Type': 'application/json' },
     })
     .pipe(
      map(value => {
        this.isLogIn$.next(true);
        localStorage.setItem('isLogIn', '1');
        localStorage.setItem('token', value.token);
        return value;
      }),
      catchError((err) => {
        if (err.status === 0) {
          return of({noConnection: true})
        }
        if (err.status === 400) {
          return of({badRequest: true})
        }
        if (err.status === 403) {
          return of({userIsNotExist: true})
        }
        return of({anotherError: true})
      })
     )
  }

  public getAllBoards() {
    return this.http
    .get<BoardResponse[]>(this.url + this.boardsPath,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        }
      })
    .pipe(
      map(value => {
        return value;
      }),
      catchError((err) => {
        if (err.status === 0) {
          return of({noConnection: true})
        }
        if (err.status === 401) {
          return of({unAuthorized: true})
        }
      return of({anotherError: true})
      })
    );
  }

  public createBoard(data: NewBoardFields) {
    return this.http.post<BoardResponse>(this.url + this.boardsPath, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
     })
     .pipe(
      map(value => {
        return value;
      }),
      catchError((err) => {
        if (err.status === 0) {
          return of({noConnection: true})
        }
        if (err.status === 400) {
          return of({badRequest: true})
        }
        if (err.status === 401) {
          return of({unAuthorized: true})
        }
        return of({anotherError: true})
      })
     )
  }

  public deleteBoard(id: string) {
    return this.http.delete(this.url + this.boardsPath + '/' + id, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
     })
     .pipe(
      map(value => {
        console.log('🚀 ~ value', value);
        return value;
      }),
      catchError((err) => {
        if (err.status === 0) {
          return of({noConnection: true})
        }
        if (err.status === 404) {
          return of({notExist: true})
        }
        if (err.status === 401) {
          return of({unAuthorized: true})
        }
        if (err.status === 400) {
          return of({badRequest: true})
        }
        return of({anotherError: true})
      })
     )
  }

  public getAllColumns(boardId: string) {
    return this.http
    .get<ColumnResponse[]>(this.url + this.boardsPath + '/' + boardId + this.columnsPath,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        }
      })
    .pipe(
      map(value => {
        console.log('🚀 ~ value', value);
        return value;
      }),
      catchError((err) => {
        if (err.status === 0) {
          return of({noConnection: true})
        }
        if (err.status === 404) {
          return of({boardNotFound: true})
        }
      return of({anotherError: true})
      })
    );
  }

  public createColumn(data: NewColumnFields, boardId: string) {
    return this.http.post<ColumnResponse>(this.url + this.boardsPath + '/' + boardId + this.columnsPath, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
     })
     .pipe(
      map(value => {
        return value;
      }),
      catchError((err) => {
        if (err.status === 0) {
          return of({noConnection: true})
        }
        if (err.status === 400) {
          return of({badRequest: true})
        }
        if (err.status === 404) {
          return of({columnsNotFound: true})
        }
        return of({anotherError: true})
      })
     )
  }

  public deleteColumn(boardId: string, columnId: string) {
    return this.http.delete(this.url + this.boardsPath + '/' + boardId + this.columnsPath + '/' + columnId, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
     })
     .pipe(
      map(value => {
        console.log('🚀 ~ value', value);
        return value;
      }),
      catchError((err) => {
        if (err.status === 0) {
          return of({noConnection: true})
        }
        if (err.status === 404) {
          return of({notExist: true})
        }
        if (err.status === 401) {
          return of({unAuthorized: true})
        }
        if (err.status === 400) {
          return of({badRequest: true})
        }
        return of({anotherError: true})
      })
     )
  }
}
