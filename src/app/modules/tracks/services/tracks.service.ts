import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { TrackModel } from "../../../core/models/tracks.model";
/* import * as dataRow from "../../../data/trakcs.json"; */
import { environment } from "../../../../environments/environment";
import { map, mergeMap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TracksService {
  /*of = Permite crear observable desde cualquier estrutura de datos


  dataTracksTrending$: Observable<TrackModel[]> = of([]);
  dataTracksRandom$: Observable<any> = of([]);

  constructor() {
  const { data }: any = (dataRow as any).default;
  //datatracks es un observable y debemos subscribirnos para obtener la data
   this.dataTracksTrending$ = of(data);

   //Otra forma de añadir mediante observable
     this.dataTracksRandom$ = new Observable((observer) => {
      const trackExample: TrackModel = {
        _id: 9,
        name: "Nuevo nombre",
        album: "nuevo Album",
        cover: "https://i.ytimg.com/vi/8iVUcLClQew/hqdefault.jpg",
        url: "https//:",
      };
      setTimeout(() => {
        observer.next([trackExample]);
      }, 3000);
    });
  }*/

  private readonly url = environment.api;
  constructor(private http: HttpClient) {}

  /* Filtrando la data */
  private skyById(
    listTracks: Array<TrackModel>,
    id: number
  ): Promise<TrackModel[]> {
    return new Promise((resolve, _) => {
      const listTemp = listTracks.filter((a) => a._id != id);
      resolve(listTemp);
    });
  }

  getAllTracks(): Observable<any> {
    return this.http.get(`${this.url}/tracks`).pipe(
      //se mapea la data usando destructuración
      /*  map(({ data }: any) => {
        return data;
      }) */

      /* Se puede concatener métodos */
      mergeMap(({ data }: any) => this.skyById(data, 1)),
      catchError((error) => {
        const { status, statusText } = error;
        console.log("Error, revisar ", error, [status, statusText]);
        return of([]);
      })
    );
  }

  getTracksRandom(): Observable<any> {
    return this.http.get(`${this.url}/tracks`).pipe(
      map(({ data }: any) => {
        return data;
      })
    );
  }
}
