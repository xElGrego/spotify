import { Component, OnInit, Input } from "@angular/core";
import { TrackModel } from "../../../core/models/tracks.model";
import { MultimediaService } from "../../servicess/multimedia.service";

@Component({
  selector: "app-card-player",
  templateUrl: "./card-player.component.html",
  styleUrls: ["./card-player.component.css"],
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: "small" | "big" = "small";
  @Input() track: TrackModel = {
    _id: 0,
    album: "",
    cover: "",
    name: "",
    url: "",
  };

  constructor(private multimediaService: MultimediaService) {}

  ngOnInit(): void {}

  sendTrack(track: TrackModel): any {
    /* Se envia la canción */
    this.multimediaService.callback.emit(track);
  }
}
