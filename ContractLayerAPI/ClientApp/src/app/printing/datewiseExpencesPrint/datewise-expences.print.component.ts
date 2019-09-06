import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrintService } from '../print.service';

@Component({
  selector: 'app-datewise-expences',
  templateUrl: './datewise-expences.print.component.html',
  styleUrls: ['./datewise-expences.print.component.css']
})
export class DatewiseExpencesPrintComponent implements OnInit {
  DatewiseExpencesDetailsList: any = [];

  ngOnInit() {
    this.DatewiseExpencesDetailsList = this.printService.documentData;
    setTimeout(() => {
      this.printService.onDataReady();
    }, 3000);
  }
  constructor(route: ActivatedRoute, private printService: PrintService) {
  }
}
 

