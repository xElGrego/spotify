import { Component, OnInit, Input } from "@angular/core";
import { TrackModel } from "../../../core/models/tracks.model";

@Component({
  selector: "app-section-generic",
  templateUrl: "./section-generic.component.html",
  styleUrls: ["./section-generic.component.css"],
})
export class SectionGenericComponent implements OnInit {
  /* @INPUT sirve para la comunicación entre los componentes */
  @Input() title: string = "";
  @Input() mode: "small" | "big" = "small";
  @Input() dataTracks: Array<TrackModel> = [];

  constructor() {}

  ngOnInit(): void {}
}
