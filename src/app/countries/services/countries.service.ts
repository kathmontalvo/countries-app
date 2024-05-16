import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private API_URL: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.API_URL}/capital/${term}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(() => of([]))
    )
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.API_URL}/name/${term}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(() => of([]))
    )
  }

  searchRegion( region: string): Observable<Country[]> {
    const url = `${this.API_URL}/region//${region}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(() => of([]))
    )
  }

}