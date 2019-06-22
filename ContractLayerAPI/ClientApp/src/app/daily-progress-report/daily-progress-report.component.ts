import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DPRService } from "./dpr.service";
@Component({
  selector: 'app-daily-progress-report',
  templateUrl: './daily-progress-report.component.html',
  styleUrls: ['./daily-progress-report.component.css']
})
export class DailyProgressReportComponent implements OnInit {

  columnDefs;
  rowData;
  constructor(private router: Router, private dprService: DPRService) { }

  ngOnInit() {
    this.columnDefs = [
      { headerName: 'Dpr No', field: 'Dprid' },
      { teamMember: 'Client Name', field: 'ClientName' },
      { teamMember: 'Project Name', field: 'ProjectName' },
      { teamMember: 'Work Name', field: 'WorkName' },
      { headerName: 'Report Date', field: 'Dprdate' },
      { headerName: 'Target Date', field: 'TargetDate' },
      { headerName: 'Report Given', field: 'ReportText' },
      { teamMember: 'Associate Name', field: 'DprassociateName' },
      { teamMember: 'Conatractor Name', field: 'DprcontractorName' },
      { teamMember: 'User Name', field: 'DpruserName' },
      { teamMember: 'KT-Con Reprentative Name', field: 'KtrepresentativeName' },
    ];

    this.dprService.getAllDPRDetails().subscribe((data) => {
      this.rowData = data;
    })
  }

  redirectToAddDPR() {
    this.router.navigateByUrl('/dailyprogressreport/adddailyprogressreport');
  }

   
}
