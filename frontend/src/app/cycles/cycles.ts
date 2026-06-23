import { Component } from '@angular/core';

@Component({
  selector: 'app-cycles',
  standalone: false,
  templateUrl: './cycles.html',
  styleUrl: './cycles.css'
})
export class Cycles {
  constructor() {
    console.log('Constructor called')
  }
  message: String = '';
  ngOnInit() {
    console.log('ngOninit called')
    this.message ='Hello world'
    
  }

}
