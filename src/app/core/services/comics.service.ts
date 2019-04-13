import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comic } from 'src/app/shared/models/comic.model';
import { Observable } from 'rxjs';
import { MarvelResponse } from 'src/app/shared/models/marvel-response.model';
import { Character } from 'src/app/shared/models/character.model';
import { Creator } from 'src/app/shared/models/creator.model';
import { Event } from 'src/app/shared/models/event.model';
import { Story } from 'src/app/shared/models/story.model';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private http: HttpClient) { }

  getAll(searchText: string, limit: number, offset: number): Observable<MarvelResponse<Comic>> {
    return this.http.get<MarvelResponse<Comic>>(
      `comics?${searchText ? `titleStartsWith=${searchText}&` : ''}limit=${limit}&offset=${offset * limit}`);
  }
  getById(id: number): Observable<MarvelResponse<Comic>> {
    return this.http.get<MarvelResponse<Comic>>(`comics/${id}`);
  }
  getCharacters(id: number): Observable<MarvelResponse<Character>> {
    return this.http.get<MarvelResponse<Character>>(`comics/${id}/characters`);
  }
  getCreators(id: number): Observable<MarvelResponse<Creator>> {
    return this.http.get<MarvelResponse<Creator>>(`comics/${id}/creators`);
  }
  getEvents(id: number): Observable<MarvelResponse<Event>> {
    return this.http.get<MarvelResponse<Event>>(`comics/${id}/events`);
  }
  getStories(id: number): Observable<MarvelResponse<Story>> {
    return this.http.get<MarvelResponse<Story>>(`comics/${id}/stories`);
  }
}
