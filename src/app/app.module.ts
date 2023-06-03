import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'users',
        component: UsersComponent,
        children: [{ path: ':id', component: UserComponent }],
    },
    {
        path: 'servers',
        component: ServersComponent,
        children: [{ path: ':id/edit', component: EditServerComponent }],
    },
];
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        UsersComponent,
        UserComponent,
        ServersComponent,
        ServerComponent,
        EditServerComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
