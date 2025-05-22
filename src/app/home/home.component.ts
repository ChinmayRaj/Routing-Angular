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
}
