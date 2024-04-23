import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detox',
  templateUrl: './detox.component.html',
  styleUrl: './detox.component.scss'
})
export class DetoxComponent implements OnInit {
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
