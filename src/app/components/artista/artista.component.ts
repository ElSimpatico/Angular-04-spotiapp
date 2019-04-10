import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
  artista: any =  {};
  topTracks: any[] =  [];
  loading: boolean;
  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params => {
      console.log(params);
      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });
   }

  ngOnInit() {
  }

  getArtista(id: string) {
    this.spotify.getArtista(id)
      .subscribe(data => {
        console.log(data);
        this.artista = data;
        this.loading = false;
      });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id)
      .subscribe(data => {
        console.log(data);
        this.topTracks = data;
      });
  }
}
