import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path : '', component: LandingComponent  },
  { path : 'quiz', component: QuizComponent  },
  { path : 'result', component: ResultComponent  }
 ]

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, HeaderComponent, LandingComponent, QuizComponent, ResultComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
