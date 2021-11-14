import { Pipe, PipeTransform } from "@angular/core";
import { TrackModel } from "../../core/models/tracks.model";

@Pipe({
  name: "orderList",
})
export class OrderListPipe implements PipeTransform {
  /* Ordenando la lista */
  transform(
    value: Array<any>,
    /* Parametros que envio para la validación */
    args: string | null = null,
    sort: string = "asc"
  ): TrackModel[] {
    /*
    args es el tipo de filtro
    a  y b son el objeto que se va a comparar
    */
    try {
      if (args == null) {
        return value;
      } else {
        const valTemp = value.sort((a, b) => {
          if (a[args] < b[args]) {
            return -1;
          } else if (a[args] == b[args]) {
            return 0;
          } else if (a[args] > b[args]) {
            return 1;
          }
          return 1;
        });
        return sort == "asc" ? valTemp : valTemp.reverse();
      }
    } catch (error) {
      console.log(error);
      return value;
    }
  }
}
