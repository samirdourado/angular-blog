import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ContentComponent, MenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
