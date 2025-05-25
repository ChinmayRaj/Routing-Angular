import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
constructor(private route:ActivatedRoute)
{

}
name:null|string="";
id:null|number=0;

ngOnInit(){
  this.route.params.subscribe((params)=>{
    this.name=params['name'];
    this.id=params['id'];
  })
}

}
