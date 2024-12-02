import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent { }
