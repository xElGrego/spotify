import { Component, Input, OnInit } from "@angular/core";
import { TrackModel } from "../../../../core/models/tracks.model";

/* Data */
import * as dataRow from "../../../../data/trakcs.json";

@Component({
  selector: "app-tracks-page",
  templateUrl: "./tracks-page.component.html",
  styleUrls: ["./tracks-page.component.css"],
})
export class TracksPageComponent implements OnInit {
  constructor() {}

  mockTrackList: Array<TrackModel> = [];

  ngOnInit(): void {
    const { data }: any = (dataRow as any).default;

    this.mockTrackList = data;
  }
}
