import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const TOKEN = 'Bearer BQBMSTAG60r3yaalIcu88QFqMjawgA3Vi2Qe3VrbXva9u1s2zhdgab8BcrMG_E7pTV-w1ppagUTiGTEWU3Q';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: TOKEN
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      Authorization: TOKEN
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers});
  }
}
