import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { ManagementComponent } from './components/management/management.component';
import { FooterComponent } from './components/footer/footer.component';
import { TheteamComponent } from './components/theteam/theteam.component';
import { ContactusComponent } from './components/contactus/contactus.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            NavComponent,
            HeroComponent,
            TheteamComponent,
            ManagementComponent,
            FooterComponent,
            ContactusComponent

          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Thikakings';
}
