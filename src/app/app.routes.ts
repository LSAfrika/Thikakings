import { Routes } from '@angular/router';
import { TeamComponent } from './routes/team/team.component';
import { TeamstatsComponent } from './routes/teamstats/teamstats.component';
import { NotfoundComponent } from './routes/notfound/notfound.component';

export const routes: Routes = [
    {path:'teamstats',component:TeamstatsComponent},
    {path:'**',component:NotfoundComponent}
];
