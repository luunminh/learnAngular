import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
    user: { id: number; name: string } | undefined;
    paramsSubscription: Subscription | undefined;
    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.user = {
            id: this.route.snapshot.params['id'], 
            name: 'minh luu',
        };

        this.paramsSubscription = this.route.params.subscribe(
            (params: Params) => {
                this.user = {
                    id: params['id'],
                    name: 'Phu Nguyen',
                };
            }
        );
    }

    ngOnDestroy() {
        if (this.paramsSubscription) {
            this.paramsSubscription.unsubscribe();
        }
    }
}
