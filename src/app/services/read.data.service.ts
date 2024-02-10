import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomePageType } from '../model/home.page';

@Injectable({
  providedIn: 'root',
})
export class ReadDataService {
  private homePageJsonUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<HomePageType> {
    return this.http.get<HomePageType>(this.homePageJsonUrl);
  }
}
