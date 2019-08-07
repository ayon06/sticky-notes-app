import { Directive, forwardRef, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const DEFAULT_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ContentEditbaleDirective),
    multi: true
};

@Directive({
    selector: '[contentEditable]',
    providers: [DEFAULT_VALUE_ACCESSOR]
})
export class ContentEditbaleDirective implements ControlValueAccessor {
    constructor(private _elRef: ElementRef, private _renderer: Renderer2) {
    }
    onChange() {
        if (this._onChange) {
            this._onChange(this._elRef.nativeElement.innerText);
        }
    }

    @HostListener('keyup', ['$event'])
    keyup(event: any) {
        this.onChange();
    }


    // ControlValueAccessor implementation
    // ====================================

    private _onChange = (_) => { }; // call it if your value changed..
    private _onTouched = () => { }; // call it "on blur" ..

    // will be called if a values comes in via ngModule !
    writeValue(val: any) {
        if (!val) {
            val = '';
        }
        this._renderer.setProperty(this._elRef.nativeElement, 'innerText', val);
    }

    registerOnChange(fn: (_: any) => string) { this._onChange = fn; }
    registerOnTouched(fn: () => void): void { this._onTouched = fn; }
}
