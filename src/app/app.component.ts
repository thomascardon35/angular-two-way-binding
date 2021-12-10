import { Component, OnInit, VERSION } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  yourName;
  searchItem = '';
  filterAtt = 'last';
  users;

  constructor(private dataService: DataService) {}

  // getName(name: any) {
  //   this.searchItem = name;
  // }

  getUser(nameSearch: string, filtAtt: string) {
    if (nameSearch != undefined) {
      this.searchItem = nameSearch;
    }
    if (filtAtt != undefined) {
      this.filterAtt = filtAtt;
    }
    this.users = this.dataService
      .getUsersData()
      .filter((x) => x.name[this.filterAtt].indexOf(this.searchItem) > -1);

    // if (name === '') {
    //   this.users = this.dataService.getUsersData();
    // } else {
    //   let usersArray = [];
    //   for (let user of this.dataService.getUsersData()) {
    //     if (user.name.last.includes(name)) {
    //       usersArray.push(user);
    //     }
    //   }
    //   this.users = usersArray;
    //   usersArray = [];
    // }
  }

  ngOnInit() {
    this.users = this.dataService.getUsersData();
  }
}
