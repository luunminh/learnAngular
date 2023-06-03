import { Component, Input } from '@angular/core';
import { ServerService } from '../server.service';
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.scss'],
})
export class ServerComponent {
    @Input() server: { serverName: string; serverStatus: string } | undefined;
    @Input() i : number | undefined


}
