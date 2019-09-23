import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log("Spotify Service Listo");
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const HEADERS = new HttpHeaders({
      Authorization:
        "Bearer QC4aqah_rQ5hkZD1z__S7SxSrWO2nocKr9UqNiyUoFYaT59ZRhTK7zj2B1sExVfxLJ-KhjzeT5LQCmaros"
    });

    return this.http.get(url, { headers: HEADERS });
  }

  getNewReleases() {
    return this.getQuery("browse/new-releases?limit=20").pipe(
      map(data => data["albums"].items)
    );
  }

  getArtistas(termino: string) {
    return this.getQuery(
      `search?q=${termino}&type=artist&market=MX&offset=0&limit=15`
    ).pipe(map(data => data["artists"].items));
  }

  getArtista(id: string) {
    return this.getQuery(
      `artists/${id}`
    );
    // .pipe(map(data => data["artists"].items));
  }

  getTopTracks(id: string) {
    return this.getQuery(
      `artists/${id}/top-tracks?country=us`
    ).pipe(map(data => data["tracks"]));
  }
}
