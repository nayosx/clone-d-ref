import { ImgFallbackDirective } from './img-fallback.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('ImgFallbackDirective', () => {
  const fallbackUrl = 'https://fallback.jpg';
  const loadingUrl = 'https://loading.gif';
  const imageUrl = 'https://original.jpg';

  let mockElementRef: ElementRef;
  let mockRenderer: Renderer2;
  let mockImg: HTMLImageElement;

  beforeEach(() => {
    mockImg = {
      src: imageUrl,
      setAttribute: jest.fn(),
      classList: { add: jest.fn() }
    } as unknown as HTMLImageElement;

    mockElementRef = {
      nativeElement: mockImg
    } as ElementRef;

    mockRenderer = {
      setAttribute: jest.fn(),
      addClass: jest.fn()
    } as unknown as Renderer2;
  });

  it('should not run on server platform', () => {
    const directive = new ImgFallbackDirective(mockElementRef, mockRenderer, 'server');
    directive.ngOnInit();
    expect(mockRenderer.setAttribute).not.toHaveBeenCalled();
    expect(mockRenderer.addClass).not.toHaveBeenCalled();
  });

  it('should set loading and fallback image on error (browser)', () => {
    const directive = new ImgFallbackDirective(mockElementRef, mockRenderer, 'browser');
    directive.fallbackUrl = fallbackUrl;
    directive.loadingUrl = loadingUrl;

    global.Image = class {
      onload!: () => void;
      onerror!: () => void;
      set src(url: string) {
        this.onerror();
      }
    } as any;

    directive.ngOnInit();

    expect(mockRenderer.setAttribute).toHaveBeenCalledWith(mockImg, 'src', loadingUrl);
    expect(mockRenderer.addClass).toHaveBeenCalledWith(mockImg, 'loading-img');
    expect(mockRenderer.setAttribute).toHaveBeenCalledWith(mockImg, 'src', fallbackUrl);
    expect(mockRenderer.addClass).toHaveBeenCalledWith(mockImg, 'error-img');
  });

  it('should set original image on successful load (browser)', () => {
    const directive = new ImgFallbackDirective(mockElementRef, mockRenderer, 'browser');
    directive.fallbackUrl = fallbackUrl;
    directive.loadingUrl = loadingUrl;

    let triggerOnLoad: () => void = () => {};

    global.Image = class {
      onload!: () => void;
      onerror!: () => void;
      set src(url: string) {
        triggerOnLoad = this.onload;
      }
    } as any;

    directive.ngOnInit();
    triggerOnLoad();

    expect(mockRenderer.setAttribute).toHaveBeenCalledWith(mockImg, 'src', loadingUrl);
    expect(mockRenderer.setAttribute).toHaveBeenCalledWith(mockImg, 'src', imageUrl);
    expect(mockRenderer.addClass).toHaveBeenCalledWith(mockImg, 'loaded-img');
  });
});
