import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-landing-page2',
  templateUrl: './landing-page2.component.html',
  styleUrls: ['./landing-page2.component.css']
})
export class LandingPage2Component {
  constructor(private dialogRef: MatDialogRef<LandingPage2Component>) {}
  closeDialog(): void {
    this.dialogRef.close();
  }
}
