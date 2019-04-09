import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


const TOKEN = 'Bearer BQApSEwaPcNkHqAsk_fi6PNmdqbrBs1Rkr-C_0rBcMzTkpibFDQgi9segigS4xUKKcyGGhGyd0gLot4h13I';

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

  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map((data: any) => data.artists.items));
  }
}
