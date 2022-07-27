import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistasBusqueda: any[] = [];

  loading: boolean = true;

  constructor(
    private _spotifyService: SpotifyService
  ) {
    this.loading = true;
   }

  ngOnInit(): void {
  }

  buscar( termino: string ) {
    console.log(termino);
    this._spotifyService.busquedaArtista(termino)
      .subscribe((data: any) =>{
        this.artistasBusqueda = data.artists.items;
        this.loading = false;
      });
  }
}
