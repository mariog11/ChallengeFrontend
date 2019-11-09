import { Component, OnInit } from '@angular/core';
import { NameRetrievalService } from '../../services/name-retrieval.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  FirstName:string;
  MiddleName:string;
  LastName:string;

  constructor(private nameRetriever: NameRetrievalService) { }

  ngOnInit() {
    //Call function that uses http service to make call to Node.JS API
    var _this = this;
    this.nameRetriever.getFirstName().then((res) => {
      let res_data = JSON.parse(JSON.stringify(res));
      _this.FirstName = res_data[0].name;
    });
    this.nameRetriever.getMiddleName().then((res) => {
      let res_data = JSON.parse(JSON.stringify(res));
      _this.MiddleName = res_data[0].name;
    });
    this.nameRetriever.getLastName().then((res) => {
      let res_data = JSON.parse(JSON.stringify(res));
      _this.LastName = res_data[0].name;
    });
  }

}
