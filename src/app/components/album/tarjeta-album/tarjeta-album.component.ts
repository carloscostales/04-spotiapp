import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-album',
  templateUrl: './tarjeta-album.component.html',
  styleUrls: ['./tarjeta-album.component.css']
})
export class TarjetaAlbumComponent implements OnInit {

  @Input() items: any[] = []

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  verArtista( artistaId: string ) {
    this.router.navigate( ['/artista', artistaId] )
  }

  verAlbum( albumId: string ) {
    this.router.navigate( ['/album', albumId] );
  }
}
