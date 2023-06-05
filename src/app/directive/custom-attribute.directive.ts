import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
} from '@angular/core';

@Directive({
    selector: '[appCustomAttribute]',
})
export class CustomAttributeDirective {
    constructor(private elmRef: ElementRef) {}

    @HostListener('mouseenter') mouseover(event: Event) {
        this.elmRef.nativeElement.style.fontSize = '30px';
        this.elmRef.nativeElement.style.backgroundColor = 'red';
    }

    @HostListener('mouseleave') mouseleave(event: Event) {
        this.elmRef.nativeElement.style.fontSize = '15px';
        this.elmRef.nativeElement.style.backgroundColor = 'transparent';
    }
}
