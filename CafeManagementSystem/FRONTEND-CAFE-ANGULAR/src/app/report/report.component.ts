import { Component, OnInit } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { ProfileServiceService } from '../services/profile-service.service';
import { Bills } from '../datatype/user';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  bill:Bills|undefined;
  pdfData:Blob|undefined;
  pdfSrc: string | ArrayBuffer | any;
  constructor(private signUpService:SignupService,
    private profileService:ProfileServiceService) { }

  ngOnInit(): void {

  }

  getReportData(){
    this.bill=this.profileService.getReportBill();
    this.signUpService.getReport(this.bill).subscribe((response)=>{
      this.pdfData=response;
      const reader = new FileReader();
        reader.readAsDataURL(response);
        reader.onloadend = () => {
          this.pdfSrc = reader.result;
        };
    });
  }

  displayPdf(){
     // Use a library or native capabilities to display the PDF.
    // You can consider using libraries like ng2-pdf-viewer, pdf.js, or the <embed> tag.
  }

}
