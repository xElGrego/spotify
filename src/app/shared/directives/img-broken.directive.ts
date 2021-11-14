import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "img[appImgBroken]",
})
export class ImgBrokenDirective {
  /* Con elementRef se hace referencia a un elemento HTML */
  /* Con HostListener escucha al host, al img en este caso */
  /* se usa el evento "error"

  Para llamar a img de internte
  @Input() customSrc = '';
  img native.src = customSrc;
  despues el llama customSrc en el html

  */
  @HostListener("error") handlerError(): void {
    const imgNative = this.host.nativeElement;
    console.log("Esta imagen reventó", this.host);
    imgNative.src = "../../../assets/image-broken.png";
  }

  constructor(private host: ElementRef) {
    console.log(host);
  }
}
