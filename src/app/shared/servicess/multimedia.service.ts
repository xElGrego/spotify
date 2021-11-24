import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MultimediaService {
  /*
  Emite eventos y nos podemos subscribir,
  también envia datos hacia componentes  padres
  */
  callback: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}
}
