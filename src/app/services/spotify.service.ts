import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


const TOKEN = 'Bearer BQC8LSR0zd_RjuBC4Qtec0X-yFXL1hchVxxThdJULlWY9FI__skCzr-DUmHsjjW9Qn-G64Xy-orteKcte-0';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: TOKEN
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .pipe(map((data: any) => data.albums.items));
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      Authorization: TOKEN
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
      .pipe(map((data: any) => data.artists.items));
  }
}
