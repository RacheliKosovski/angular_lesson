import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  exercises = [{
    op1:7,
    op2:2,
    op:'*',
    correct:14,
    res:[14,15,16]
  },{
    op1:7,
    op2:15,
    op:'+',
    correct:22,
    res:[20,22,24]
  },{
    op1:3,
    op2:3,
    op:'/',
    correct:1,
    res:[0,1,5]
  },{
    op1:7,
    op2:5,
    op:'*',
    correct:35,
    res:[20,30,35]
  },{
    op1:7,
    op2:2,
    op:'-',
    correct:5,
    res:[14,5,10]
  },{
    op1:7,
    op2:7,
    op:'*',
    correct:49,
    res:[49,14,1]
  },{
    op1:9,
    op2:3,
    op:'/',
    correct:3,
    res:[27,3,2]
  },{
    op1:1,
    op2:4,
    op:'*',
    correct:4,
    res:[4,0,1]
  },{
    op1:8,
    op2:7,
    op:'-',
    correct:1,
    res:[1,56,61]
  },{
    op1:27,
    op2:3,
    op:'/',
    correct:9,
    res:[8,9,10]
  }];
  corect:boolean=false;
  wrong:boolean=false;
  index:number=0;
  time:any;
  timer(){
    this.time=setTimeout(()=>{
    this.corect=false;
    this.wrong=false;
    if(this.index<this.exercises.length-1){
      this.index++;
      this.timer();
    }
    else
      alert("המשחק הסתיים !!!");
    },4000);
  }
  resultCalc(res:number) {
    clearTimeout(this.time);
    if(res==this.exercises[this.index].correct)
    {
      this.corect=true;
      this.wrong=false;
    }
    else
    {
      this.corect=false;
      this.wrong=true;
    }
    if(this.index<this.exercises.length-1)
    {
      this.index++;
      this.timer();
    }
    else
      alert("המשחק הסתיים !!!");
  }
 
  
  constructor() { }

  ngOnInit(): void {
    this.timer();
  }

}
