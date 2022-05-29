import { Component } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss'],
})
export class SubComponent {
  constructor(private readonly navigationService: NavigationService) {}

  public onBack(): void {
    this.navigationService.back();
  }
}
