import { Routes } from '@angular/router';
import { TeamComponent } from './routes/team/team.component';
import { TeamstatsComponent } from './routes/teamstats/teamstats.component';
import { NotfoundComponent } from './routes/notfound/notfound.component';
import { HomeComponent } from './routes/home/home.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'teamstats',component:TeamstatsComponent},
    // {path:'**',component:NotfoundComponent}
];
