import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './user.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserRepository {
  private URL = 'https://pacific-thicket-58032.herokuapp.com/estudiantes';

  constructor(
    private http: HttpClient
  ) {}

  public getAll(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.URL);
  }
  public save(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.URL, user);
  }

  public update(user: UserModel): Observable<UserModel> {
    return this.http.put(`${this.URL}/${user.id}`, user);
  }
}
