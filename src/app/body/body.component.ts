import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  array: any = [];
  find: any;
  resultArray: any = [];
  a: any; b: any; c: any; d: any; e: any;
  display: any = false;
  result: any = false;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.userDetalis();
  }
  userDetalis() {
    this.api.getData().subscribe((response: any) => {
      console.log(response);
      this.array = response.data;
    }
    )
  }
  details(i: number) {
    this.display = true
    this.a = this.array[i].id;
    this.b = this.array[i].email;
    this.c = this.array[i].first_name;
    this.d = this.array[i].last_name;
    this.e = this.array[i].avatar;
  }
  searching() {
    debugger;
    for (let i = 0; i < this.array.length; i++) {
      if ((this.find == this.array[i].first_name) || (this.array[i].last_name)) {
        // window.alert("user found")
        const result = this.array.filter((obj: any) => {
          return obj.first_name == this.find || obj.last_name == this.find;
        });
        console.log(result)
        this.resultArray = result;
        console.log(this.resultArray)
        this.result = true;
      }
      else {
        window.alert("User not found")
        break;
      }

    }
  }

}
