import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users {
  database = ['Mannan', 'Janhavi', 'Mauu']
  
  students = ['Arya', 'Shampoo',
    'jack'
  ]

  database2 = [
    {name:'Mannan',rollnum:18},
    {name:'Janhavi',rollnum:19},
    {name:'Mauu',rollnum:20},
  ]

  classes = [
    { name: 'Class A', students: ['Aarav', 'Mira', 'Raj'] },
    { name: 'Class B', students: ['Sara', 'Kabir'] }
  ];


}
