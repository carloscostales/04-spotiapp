import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albumId: string;
  album: any;
  artista: any;
  canciones: any[] = [];

  loading: boolean = true;

  constructor(
    private _spotifyService: SpotifyService,
    private activatedRoute: ActivatedRoute
  )
  {
    this.albumId = this.activatedRoute.snapshot.params["id"];
    this.loading = true;
  }

  ngOnInit(): void {
    this._spotifyService.getAlbum( this.albumId )
      .subscribe( ( data: any ) => {
        this.album = data;

        this.loading = false;
      });

      this._spotifyService.getCancionesAlbum( this.albumId)
        .subscribe((data:any)=> {
          this.canciones = data.items;
          this.loading = false;
          console.log(this.canciones);
        });
  }
}
