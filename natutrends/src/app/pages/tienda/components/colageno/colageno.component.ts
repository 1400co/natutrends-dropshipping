import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-colageno',
  templateUrl: './colageno.component.html',
  styleUrl: './colageno.component.scss'
})
export class ColagenoComponent implements OnInit {
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
