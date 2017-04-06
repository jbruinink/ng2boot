import {Component} from '@angular/core';
import {Http} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  data: any;
  error: string;

  constructor(private http: Http) {
    this.data = http
      .get("/api/data")
      .map(response => response.json() || {})
      .subscribe(data => this.data = data, error => this.error = error);
  }
}
