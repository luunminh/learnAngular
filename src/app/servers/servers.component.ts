import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from './server.service';
@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.scss'],
    providers: [ServerService],
})
export class ServersComponent implements OnInit {
    servers: any;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private serverService: ServerService
    ) {}

    ngOnInit(): void {
        this.servers = this.serverService.getServers();
    }

    onReload() {
        this.router.navigate(['servers'], { relativeTo: this.route });
    }
}
