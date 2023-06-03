import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
    AfterViewInit,
    OnDestroy,
} from '@angular/core';
import { ServerService } from '../server.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-edit-server',
    templateUrl: './edit-server.component.html',
    styleUrls: ['./edit-server.component.scss'],
    providers: [ServerService],
})
export class EditServerComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild('inputName') inputName: ElementRef | undefined;
    @ViewChild('inputStatus') inputStatus: ElementRef | undefined;
    paramsSubscription: Subscription | undefined;
    user: { serverName: string; status: string } | undefined;
    constructor(
        private serverService: ServerService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        let id = this.route.snapshot.params['id'];
        this.user = this.serverService.getServerById(id);

        this.paramsSubscription = this.route.params.subscribe(
            (params: Params) => {
                id = params['id'];
                this.user = this.serverService.getServerById(id);
                console.log(this.user);

                if (this.inputName && this.inputStatus && this.user) {
                    this.inputName.nativeElement.value = this.user.serverName;
                    this.inputStatus.nativeElement.value = this.user.status;
                }
            }
        );
    }

    ngAfterViewInit(): void {
        if (this.inputName && this.inputStatus && this.user) {
            this.inputName.nativeElement.value = this.user.serverName;
            this.inputStatus.nativeElement.value = this.user.status;
        }
    }

    ngOnDestroy(): void {
        console.log('unmounted');

        if (this.paramsSubscription) {
            this.paramsSubscription.unsubscribe();
        }
    }
}
