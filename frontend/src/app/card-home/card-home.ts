import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-home',
  standalone: false,
  templateUrl: './card-home.html',
  styleUrl: './card-home.css'
})
export class CardHome {
  @Input() heading: string = '';
  @Input() text: string = '';

  headingData: any[] = [];





}
