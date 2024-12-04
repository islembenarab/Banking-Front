import {Component, inject,  OnInit} from '@angular/core';
import {NavigationService} from '../../services/navigation.service';
import {Route} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
  private navigation = inject(NavigationService);
  routes: Route[] = [];
  ngOnInit(): void {
    this.routes = this.getRoutes();
  }
  private getRoutes(): Route[] {
    return this.navigation.getNavigationRoutes();
  }

}
