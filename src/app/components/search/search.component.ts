import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any[] = [];

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
  }

  loading: boolean;

  buscar(termino: string){
    this.loading = true;
    console.log(termino);
    this.spotify.getArtistas(termino)
    .subscribe( data => {
      console.log(data);
      this.artists = data;
      this.loading = false;
    } )
  }

}
