import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  constructor() {}

  // let step:number = 1;
  // let barWidth:number = 20;
  // let score:number =0;

  step = 1;
  barWidth = 20;
  score = 0;

  ngOnInit() {}

  onBack() {
    this.step--;
    this.barWidth = this.barWidth - 20;
  }
  onNext() {
    this.step++;
    this.barWidth = this.barWidth + 20;
  }

  calScore(event) {
    switch (this.step) {
      case 1:
        if (event.id == "cr1-1") {
          this.score++;
          console.log(this.score);
          console.log(event.id);
          console.log(this.step);
          break;
        }
        console.log(event.id);
        break;

      case 2:
       if (event.id == "cr2-1") {
          this.score++;
          console.log(this.score);
          console.log(event.id);
          break;
        }
        console.log(event.id);
        break;
      case 3:
          if (event.id == "cr3-4") {
          this.score++;
          console.log(this.score);
          console.log(event.id);
          break;
        }
        console.log(event.id);
        break;
      case 4:
               if (event.id == "cr4-1") {
          this.score++;
          console.log(this.score);
          console.log(event.id);
          break;
        }
        console.log(event.id);
        break;
      case 5:
               if (event.id == "cr5-2") {
          this.score++;
          console.log(this.score);
          console.log(event.id);
          break;
        }
        console.log(event.id);
        break;
            default:
        console.log("No such day exists!");
        break;
    }
  }
}
