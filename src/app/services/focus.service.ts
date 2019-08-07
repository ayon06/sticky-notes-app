import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable()
export class FocusService {
    private renderer: Renderer2;
    constructor(rendererFactory: RendererFactory2) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    moveFocusTo(id: string) {

        setTimeout(() => this.renderer.selectRootElement(id).focus(), 0);

    }
}
