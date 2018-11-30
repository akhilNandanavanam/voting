import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-voter-form',
  templateUrl: './voter-form.component.html',
  styleUrls: ['./voter-form.component.scss']
})
export class VoterFormComponent implements OnInit {
  voterCount : number = 1;
  voterBool : boolean =false;
  voterData : any =[];
  voterNumber : any = [];
  voterValidation = new FormGroup({
    name : new FormControl('',Validators.required),
    age : new FormControl('',Validators.required),
    city : new FormControl('',Validators.required),
    state : new FormControl('',Validators.required),
  });
  constructor() { }

  ngOnInit() {
    
  }
  voterCntCalc(){
    this.voterCount += 1;
    this.voterBool=true;
    var data = {
      "id": this.voterCount,
      "name":"",
      "age":"",
      "city":"",
      "state":""
    }
    this.voterData.push(data);
    this.voterNumber.push(this.voterCount);
    console.log(this.voterNumber);
  } 
  voterCntDec(){
    this.voterCount -= 1;
    if(this.voterCount==1){
      this.voterBool = false;
    }
    this.voterNumber.pop();
    this.voterData.pop();
    
  }
  addData(){
    var data ={
      "id" : this.voterCount,
      "name":this.voterValidation.value.name,
      "age":this.voterValidation.value.age,
      "city":this.voterValidation.value.city,
      "state":this.voterValidation.value.state
    }
    this.voterData.push(data);
  }

}
