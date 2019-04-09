import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      // tslint:disable-next-line: max-line-length
      Authorization: 'Bearer BQAT4zpRchx-SqXAtmRFP0Y7npAObmXcbaS_a-xNV8GqA6nSL_FiRWRjxi7m8BQfIUmiwNE6tIhF981c4-o99h5U4BTTAgIe_wniq_3QaG8pr2NoY53RIZZuCqcfP73pdZ00kqE44KyBFQ'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
