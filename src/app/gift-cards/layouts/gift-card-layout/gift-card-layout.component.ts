import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';

@Component({
  selector: 'app-gift-card-layout',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './gift-card-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GiftCardLayoutComponent { }
