import { APP_BOOTSTRAP_LISTENER, Component, ElementRef, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { cwd } from 'process';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
})

export class ProfessionalComponent implements OnInit {

  constructor(private githubService: GithubService, public datepipe: DatePipe) {

  }
  ngOnInit() {
  }
}
