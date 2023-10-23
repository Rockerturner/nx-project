import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AppService } from './app.service';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'nx-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client';
  body = '';
  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.appService.fromNest().subscribe((res) => (this.body = res.message));
  }
}
