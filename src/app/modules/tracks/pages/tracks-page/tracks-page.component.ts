import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { TrackModel } from "../../../../core/models/tracks.model";

/* Data */
import * as dataRow from "../../../../data/trakcs.json";
import { TracksService } from "../../services/tracks.service";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-tracks-page",
  templateUrl: "./tracks-page.component.html",
  styleUrls: ["./tracks-page.component.css"],
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  listObserve: Array<Subscription> = [];

  constructor(private tracksService: TracksService) {}

  ngOnInit(): void {
    /* const { data }: any = (dataRow as any).default;
   const observerTrending$ = this.tracksService.dataTracksTrending$.subscribe(
      (response) => {
        this.tracksTrending = response;
        this.tracksRandom = response;
        console.log(response);
      }
    );

    const observerRandom$ = this.tracksService.dataTracksRandom$.subscribe(
      (response) => {
        //se concatena los arrasys
        this.tracksRandom = [...this.tracksRandom, ...response];
        //this.tracksRandom.push(response)
      }
    );

    this.listObserve = [observerTrending$, observerRandom$];*/

    this.loadDataRandom();
    this.loadDataAll();
  }

  loadDataAll(): void {
    this.tracksService.getAllTracks().subscribe((data: TrackModel[]) => {
      console.log(data);
      this.tracksTrending = data;
    });
  }

  loadDataRandom() {
    this.tracksService.getTracksRandom().subscribe((data: TrackModel[]) => {
      this.tracksRandom = data;
    });
  }

  ngOnDestroy(): void {
    this.listObserve.forEach((e) => {
      e.unsubscribe();
    });
  }
}
