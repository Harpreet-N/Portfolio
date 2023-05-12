import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from "src/app/services/language/language.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'harpreet-portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
  ) {
  }
  ngOnInit(): void {

    this.languageService.initLanguage()

    this.titleService.setTitle("Nehar Harpreet | UX/UI Developer | Software Engineer");
    this.metaService.addTags([
      { name: 'keywords', content: 'UX/UI Developer , Software Engineer' },
      { name: 'description', content: 'Hi, my name is Harpreet and I\'m a passionate Designer and Software Engineer. After completing a higher technical school in Computer Science, I\'m currently finishing my Bachelor\'s degree in the same field. In my free time, I love editing pictures and creating my own designs. My diverse skill set allows me to bring a unique perspective to every project I work on. If you have any questions or want to collaborate, don\'t hesitate to reach out at harpreetneharyt@gmail.com.' },
    ]);
    
    AOS.init();


  }
}
