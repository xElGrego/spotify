import { Component, OnInit } from "@angular/core";
import * as dataRow from "../../../data/trakcs.json";
import { TrackModel } from "../../../core/models/tracks.model";

@Component({
  selector: "app-play-list-body",
  templateUrl: "./play-list-body.component.html",
  styleUrls: ["./play-list-body.component.css"],
})
export class PlayListBodyComponent implements OnInit {
  constructor() {}

  optionSort: { property: string | null; order: string } = {
    property: null,
    order: "asc",
  };

  tracks: Array<TrackModel> = [];

  ngOnInit(): void {
    const { data }: any = (dataRow as any).default;

    this.tracks = data;
  }

  setOrder(property: string): void {
    const { order } = this.optionSort;
    console.log(property);
    this.optionSort = {
      order: order == "asc" ? "desc" : "asc",
      property: property,
    };
  }
}
