import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../dataModels/github';

@Injectable()
export class GithubService {

  apiUrl = 'https://api.github.com/users';
  constructor(private http: HttpClient) { }

  /**
   * Get all users
   */
  getUsers() {
    return this.http.get(this.apiUrl + '?per_page=10');
  }
  /**
   * Get user by username
   * @param username
   */
  getUser(username: string) {
    return this.http.get(this.apiUrl + '/${username}');
  }
  /**
   * Get repositories of user
   * @param username
   */
  getRepositories(username: string) {
    return this.http.get<Repo[]>(this.apiUrl + '/' + username + '/repos');
  }

  /**
   * Get Languages % of repository
   * @param repoUrl
   */
  getRepositoryLanguages(repoUrl: string) {
    return this.http.get(repoUrl);
  }
}
