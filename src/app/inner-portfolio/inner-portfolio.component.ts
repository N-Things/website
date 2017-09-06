import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-inner-portfolio',
  templateUrl: './inner-portfolio.component.html',
  styleUrls: ['./inner-portfolio.component.scss']
})
export class InnerPortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery(document).ready( function() {
      jQuery('#cbp-container').cubeportfolio({
         // options

         singlePageInlineCallback: function (item) {
          // add content to singlePageInline
          this.updateSinglePageInline('<div>My content to append to singlePageInline container</div>');
   
        }
      });
 });
  }

}
