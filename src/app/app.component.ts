import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-oauth';
  ghClientId = 'ca8900b33dc907f3c0c0';
  //ghClientSecret = '6c7eb6e6b352fa60f834b4f31283896c1b52da28';
  ghClientSecret = '';
  ghUserState = '';
  constructor(private httpClient: HttpClient){
    this.ghUserState = "constr"
  }

  public loginGitHub(): void
  {
    alert("invoked login git hub button = "+ this.ghClientId + ", "+ this.ghClientSecret);
   
    let getParams = new HttpParams();
    getParams = getParams.append('client_id', this.ghClientId);
    getParams = getParams.append('scope', 'user repo gist');
    getParams = getParams.append('state', this.ghUserState);

    this.httpClient.get("http://localhost:9185/github/login/oauth/authorize", { params: getParams}).subscribe( x => 
    {
      alert("i got response 1");
    })
  }

  
}
