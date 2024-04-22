import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lypomax',
  templateUrl: './lypomax.component.html',
  styleUrl: './lypomax.component.scss'
})
export class LypomaxComponent implements OnInit {


  phoneNumber:string = '';
  fbId:string = '';

  constructor(private activatedRoute: ActivatedRoute,
    )
  {

  }

  ngOnInit():void{
    this.phoneNumber =  this.activatedRoute.snapshot.params['phoneNumber']; //get from route snapshot
    this.fbId =  this.activatedRoute.snapshot.params['facebookId']; //get from route snapshot
  }

}
