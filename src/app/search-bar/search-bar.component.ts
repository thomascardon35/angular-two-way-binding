import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() eventEmitter = new EventEmitter();
  constructor() {}

  ngOnInit() {
    console.log(this.eventEmitter);
  }

  affichage(salut: any) {
    this.eventEmitter.emit(salut);
  }
}
