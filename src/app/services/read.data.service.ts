import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HomePageType } from '../model/home.page';

@Injectable({
  providedIn: 'root',
})
export class ReadDataService {
  private homePageJsonUrl = 'assets/homePage.json';
  private http = inject(HttpClient);

  getData(): Observable<HomePageType> {
    return this.http.get<HomePageType>(this.homePageJsonUrl);
  }

  splitIntoParagraphs(paragraph: string): string[] {
    return paragraph.split('\n');
  }
}
