import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  bannerTitle = 'A floating banner text which keeps on rotating';
  constructor() {}

  ngOnInit(): void {}
}
