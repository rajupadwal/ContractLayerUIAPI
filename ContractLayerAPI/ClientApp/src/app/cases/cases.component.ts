import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {
  public columnDefs;
  public rowData;

  constructor(private router: Router) {
    console.log("Initializing case component");
  }

  redirectToAddcase() {
    this.router.navigateByUrl('/cases/addcase');
  }
  ngOnInit() {
    this.InitializeGrid();
  }
  public InitializeGrid(): boolean {
    this.columnDefs = [
      { headerName: 'Court', field: 'court' },
      { headerName: 'Case', field: 'case' },
      { headerName: 'Advocate', field: 'advocate' },
      { headerName: 'Hearing Date', field: 'hearingDate' },
      { teamMember: 'Team Member', field: 'teamMember' }
       
    ];

    this.rowData = [
          { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'WP 3895 / 2018	', advocate: 'Gaurav Potnis', hearingDate: '6-Oct-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'WP 3880 / 2018	', advocate: 'Gaurav Potnis', hearingDate: '21-Dec-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'WP 3879 / 2018	', advocate: 'Gaurav Potnis', hearingDate: '6-Oct-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'WP 14274 / 2016', advocate: 'Gaurav Potnis', hearingDate: '7-Jan-19	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 181 / 2006	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 168 / 2016	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 1692 / 2007	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 997 / 2016	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 456 / 2018	', advocate: 'Gaurav Potnis', hearingDate: '28-Sep-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'WP 6403 / 2009	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'WP 8861 / 2009	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'WP 11424 / 2017', advocate: 'Gaurav Potnis', hearingDate: '10-Dec-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 1695 / 2007	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 352 / 2015	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'RC 175 / 2015	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'WP 13281 / 2017', advocate: 'Gaurav Potnis', hearingDate: '10-Dec-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'WP 6727 / 2009	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 1682 / 2007	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'WP 6725 / 2009	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'RC 2494 / 2016	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'WP 1503 / 2018	', advocate: 'Gaurav Potnis', hearingDate: '8-Aug-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 449 / 2018	', advocate: 'Gaurav Potnis', hearingDate: '3-Oct-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'WP 7843 / 2012	', advocate: 'Gaurav Potnis', hearingDate: '27-Jul-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 70 / 2018		', advocate: 'Gaurav Potnis', hearingDate: '3-Jul-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'CAF 1916 / 2007', advocate: 'Gaurav Potnis', hearingDate: '13-Jul-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'CAF 4205 / 2017', advocate: 'Gaurav Potnis', hearingDate: '4-Jul-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 148 / 2017	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'CAF 158 / 2010	', advocate: 'Gaurav Potnis', hearingDate: '30-May-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'WP 11629 / 2017', advocate: 'Gaurav Potnis', hearingDate: '10-Dec-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 995 / 2016	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 464 / 2018	', advocate: 'Gaurav Potnis', hearingDate: '1-Oct-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 470 / 2018	', advocate: 'Gaurav Potnis', hearingDate: '1-Oct-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'WP 6736 / 2009	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'CAF 4091 / 2009', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'WP 11270 / 2017', advocate: 'Gaurav Potnis', hearingDate: '10-Dec-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 1575 / 2006	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 162 / 2016	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'WP 11596 / 2017', advocate: 'Gaurav Potnis', hearingDate: '10-Dec-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 186 / 2006	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 441 / 2018	', advocate: 'Gaurav Potnis', hearingDate: '3-Oct-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 154 / 2010	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 1678 / 2007	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'WP 10907 / 2017', advocate: 'Gaurav Potnis', hearingDate: '30-Jul-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'WP 11426 / 2017', advocate: 'Gaurav Potnis', hearingDate: '10-Dec-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 455 / 2018	', advocate: 'Gaurav Potnis', hearingDate: '28-Sep-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'WP 3986 / 2018	', advocate: 'Gaurav Potnis', hearingDate: '30-Oct-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'CAF 1103 / 2017', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'CAF 3686 / 2015', advocate: 'Gaurav Potnis', hearingDate: '1-Oct-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 1694 / 2007	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'CAF 1590 / 2007', advocate: 'Gaurav Potnis', hearingDate: '13-Jul-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 179 / 2006	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'WP 3087 / 2016	', advocate: 'Gaurav Potnis', hearingDate: '26-Jun-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'RC 975 / 2017	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'RC 918 / 2018	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'CAF 3938 / 2010', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'WP 6621 / 2012	', advocate: 'Gaurav Potnis', hearingDate: '27-Jul-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 597 / 2014	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'RC 293 / 2017	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 1126 / 2017	', advocate: 'Gaurav Potnis', hearingDate: '	-       ', teamMember: '  ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'CAF 1588 / 2007', advocate: 'Gaurav Potnis', hearingDate: '13-Jul-18	', teamMember: '- ' }
        , { court: 'High Court - Bombay High Court - Bombay - Civil - Register', case: 'FA 443 / 2018	', advocate: 'Gaurav Potnis', hearingDate: '3-Oct-18	', teamMember: '- ' }
    ];
    return true;
  }
}
