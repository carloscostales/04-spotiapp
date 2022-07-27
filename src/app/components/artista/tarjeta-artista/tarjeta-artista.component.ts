import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-artista',
  templateUrl: './tarjeta-artista.component.html',
  styleUrls: ['./tarjeta-artista.component.css']
})
export class TarjetaArtistaComponent implements OnInit {

  @Input() artistasTarjeta: any[] = []

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  verArtista (artistaId: string) {
    this.router.navigate( ['/artista', artistaId] )
  }

}
