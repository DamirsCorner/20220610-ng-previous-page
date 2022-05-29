import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss'],
})
export class SubComponent {
  constructor(private readonly location: Location) {}

  public onBack(): void {
    this.location.back();
  }
}
