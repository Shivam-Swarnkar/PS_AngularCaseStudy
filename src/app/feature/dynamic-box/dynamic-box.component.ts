import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-box',
  templateUrl: './dynamic-box.component.html',
  styleUrls: ['./dynamic-box.component.css'],
})
export class DynamicBoxComponent implements OnInit {
  count = 100;
  dataCount: any = [];
  constructor() {}

  ngOnInit(): void {
    this.dataCount = Array(this.count).fill(this.count);
  }

  getValue(value: number) {
    const valueSuffix = this.findSuffix(value);
    alert(`Button in ${valueSuffix} div clicked`);
  }

  findSuffix(value: number) {
    var j = value % 10,
      k = value % 100;
    if (j == 1 && k != 11) {
      return value + 'st';
    }
    if (j == 2 && k != 12) {
      return value + 'nd';
    }
    if (j == 3 && k != 13) {
      return value + 'rd';
    }
    return value + 'th';
  }
}
