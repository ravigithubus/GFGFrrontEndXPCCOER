import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LandingPage2Component } from '../components/pages/landing-page2/landing-page2.component';

@Component({
  selector: 'app-header-componend',
  templateUrl: './header-componend.component.html',
  styleUrls: ['./header-componend.component.css']
})
export class HeaderComponendComponent {
  
  constructor(private  dialog: MatDialog){}
  opnemenu(){
    const dialogRef = this.dialog.open(LandingPage2Component, {
      width: '100%',
      height:'100%',
      data: { },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
    });
  }
}
