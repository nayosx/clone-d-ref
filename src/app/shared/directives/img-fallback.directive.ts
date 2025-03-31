import { Directive, ElementRef, Input, Renderer2, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: 'img[appImgFallback]'
})
export class ImgFallbackDirective implements OnInit {
  @Input('appImgFallback') fallbackUrl: string = '';
  @Input() loadingUrl: string = '';

  private originalUrl: string = '';
  private defaultFallback = 'https://www.atlantawatershed.org/wp-content/uploads/2017/06/default-placeholder.png';
  private defaultLoading = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const imgEl = this.el.nativeElement as HTMLImageElement;
    this.originalUrl = imgEl.src;

    const fallback = this.fallbackUrl || this.defaultFallback;
    const loading = this.loadingUrl || this.defaultLoading;

    if (loading) {
      this.renderer.setAttribute(imgEl, 'src', loading);
      this.renderer.addClass(imgEl, 'loading-img');
    }

    const testImg = new Image();
    testImg.onload = () => {
      this.renderer.setAttribute(imgEl, 'src', this.originalUrl);
      this.renderer.addClass(imgEl, 'loaded-img');
    };
    testImg.onerror = () => {
      this.renderer.setAttribute(imgEl, 'src', fallback);
      this.renderer.addClass(imgEl, 'error-img');
    };
    testImg.src = this.originalUrl;
  }
}
