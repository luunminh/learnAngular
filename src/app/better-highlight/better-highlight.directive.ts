import {
    Directive,
    ElementRef,
    OnInit,
    Renderer2,
    HostListener,
    HostBinding,
    Input,
} from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input('appBetterHighlight') highlightColor: string = 'blue';
    @HostBinding('style.backgroundColor') backgroundColor: string | undefined =
        'transparent';
    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {}

    @HostListener('mouseenter') mouseover(eventData: Event) {
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.backgroundColor = this.defaultColor;
    }
}
