import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artistaId: string = "";
  artista: any;
  albums: any[] = [];
  singles: any[] = [];

  loading: boolean = true;

  constructor(
    private _spotifyService: SpotifyService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  )
  {
    // this.activatedRoute.params.subscribe( params => console.log(params));

    this.artistaId = this.activatedRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this._spotifyService.getArtista(this.artistaId)
      .subscribe( ( data: any ) => {
        this.artista = data;
        this.loading = false;
      });

      this._spotifyService.getArtistaAlbums(this.artistaId)
        .subscribe( ( data: any ) => {
          this.albums = data.items;
          this.loading = false;
        });

      this._spotifyService.getArtistaSingles(this.artistaId)
        .subscribe( ( data: any ) => {
          this.singles = data.items;
          this.loading = false;
        });
  }

  verAlbum( albumId:string ) {
    return this.router.navigate(['/album', albumId])
  }
}
