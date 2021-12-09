import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrls: ['./filter-selector.component.css'],
})
export class FilterSelectorComponent implements OnInit {
  @Output() btnRadio: any;

  constructor() {}

  ngOnInit() {}
}
