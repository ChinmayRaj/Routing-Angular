import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive ,Router} from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router){}

goToProfile(){
  this.router.navigate(['profile'],{queryParams:{name:'Chinmay Raj Shah'}})
}
users=[
  {
    id:'1',
    name:'Anil',
    age:28,
    email:'anil@gmail.com'
  },
   {
    id:'2',
    name:'Bhavya',
    age:24,
    email:'bhavya@gmail.com'
  },
   {
    id:'3',
    name:'Chinmay',
    age:28,
    email:'chinu@gmail.com'
  },
   {
    id:'4',
    name:'Deeapk',
    age:30,
    email:'deepak@gmail.com'
  }
]
}
