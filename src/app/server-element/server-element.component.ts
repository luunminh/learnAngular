import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.scss'],
})
export class ServerElementComponent
    implements
        OnInit,
        OnChanges,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked
{
    @Input() element: { type: string; name: string; content: string };
    @Input() name: string;
    constructor() {
        this.element = { type: '', name: '', content: '' };
        this.name = '';
        console.log('constructor log');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('onchange log');
        console.log({ changes });
    }

    ngOnInit() {
        console.log('init log');
    }

    ngDoCheck() {
        console.log('ngDoCheck Log');
    }

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit log');
    }
    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked log');
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit log');
    }
    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked log');
    }
}
