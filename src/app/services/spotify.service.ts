import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) { }

   getQuery( query: string ) {
    const url = 'https://api.spotify.com/v1/' + query;
    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQColQ4wd6L3UNFc_XmhwpM4ZYnKHL2MmDGALOC1Mvk-lEV0xOXg1Es9lvAdEyibF17MZZ5P0rATMSc6NSeU5X10EqdWMsOT685DP9BjLx82xgQ-tvQ'
    });
    return this.http.get(url, { headers })
   }

   getNewReleases(): any {
    return this.getQuery('browse/new-releases');
   }

   getArtista( artistaId: string ): any {
    return this.getQuery('artists/' + artistaId);
   }

   busquedaArtista(artistaId: string): any {
    return this.getQuery('search/?q=' + artistaId + '&type=artist');
   }

   getArtistaAlbums(artistaId: string): any {
    return this.getQuery('artists/' + artistaId + '/albums?offset=0&limit=50&include_groups=album');
   }

   getArtistaSingles(artistaId: string): any {
    return this.getQuery('artists/' + artistaId + '/albums?offset=0&limit=50&include_groups=single');
   }

   getAlbum(albumId: string): any {
    return this.getQuery('albums/' + albumId );
   }

   getCancionesAlbum(albumId: any): any {
    return this.getQuery('albums/' + albumId + '/tracks');
   }
}
