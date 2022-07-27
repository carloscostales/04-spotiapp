import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lanzamientos: any[] = [];

  loading: boolean = true;

  constructor(
    private _spotifyService: SpotifyService,
    private router: Router
  ) {
    this.loading = true;
  }

  ngOnInit(): void {
    this._spotifyService.getNewReleases()
      .subscribe((data: any) =>{
        this.lanzamientos = data.albums.items;
        this.loading = false;
      });
  }
}
