import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


const TOKEN = 'Bearer BQCkQ57Y9G0wmB7B007W6coS7k6QEYZpe1co5S4rmmIpAkSWLx-12w6rm157hN5YoDP_2vMYIlhIVjaPfn4';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: TOKEN
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(map((data: any) => data.albums.items));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data: any) => data.artists.items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }
}
