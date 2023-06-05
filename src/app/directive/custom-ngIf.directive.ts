import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[csdIf]',
})
export class CustomNgIfDirective {
    private show = false;

    @Input() set csdIf(show: boolean) {
        this.show = show;
        this.displayTemplate();
    }

    @Input('csdIfElse') csdIfElse?: TemplateRef<unknown>;

    /* constructor */

    ngOnInit(): void {
        this.displayTemplate();
    }
    constructor(
        private templateRef: TemplateRef<unknown>,
        private vcr: ViewContainerRef
    ) {}

    private displayTemplate() {
        this.vcr.clear();
        if (this.show) {
            this.vcr.createEmbeddedView(this.templateRef);
        } else if (this.csdIfElse) {
            this.vcr.createEmbeddedView(this.csdIfElse);
        }
    }
}
