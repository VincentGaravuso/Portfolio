import { Component, ElementRef, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Owner } from '../../dataModels/github';
import { Repo } from '../../dataModels/github';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  public userRepos: Repo[] = [];

  public isCollapsed = false;

  constructor(private githubService: GithubService) {

  }
  ngOnInit() {
    this.githubService.getRepositories('VincentGaravuso')
      .subscribe(repos => {
        this.userRepos = repos;
        console.log(repos);
      });
  }
}
