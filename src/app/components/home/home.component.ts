import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;
  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases()
      .subscribe((data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      }, (err) => {
        this.error = true;
        this.mensajeError = err.error.error.message;
        this.loading = false;
        console.error(this.mensajeError);
      });
  }

  ngOnInit() {
  }

}
