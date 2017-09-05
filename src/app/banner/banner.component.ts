import { Component, OnInit } from '@angular/core';
let dzs = require('../../assets/scss/vendor/dzsparallaxer/dzsparallaxer');

declare var jQuery: any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {
    jQuery(document).ready(function($) {
      
      dzs.dzsprx_init('#home, { direction: "reverse", mode_scroll:"normal", settings_mode: "scroll" }');
      
      }); 
  }
}
