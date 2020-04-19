import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor() { }
   
  step = 1;
  barWidth= 20;

  ngOnInit(){ 
  }

  onBack(){
    this.step--;
    this.barWidth = this.barWidth- 20;
  }
  onNext(){

    this.step++;
    this.barWidth= this.barWidth+ 20;
  }


}