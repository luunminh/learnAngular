import { Injectable } from '@angular/core';

interface Server {
    serverName: string;
    status: string;
}
@Injectable({ providedIn: 'root' })
export class ServerService {
    servers: Server[] = [
        {
            serverName: 'AWS VietNam',
            status: 'online',
        },
        {
            serverName: 'AWS Laos',
            status: 'offline',
        },
    ];

    getServers() {
        return this.servers.slice();
    }

    getServerById(id: number) {
        return this.servers[id]
    }
}
