import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  @Input() txt!: string

  constructor(public dialogRef: MatDialogRef<DialogComponent>, private router: Router) { }

  closeDialog() {
    this.dialogRef.close();
    this.router.navigate(['/cinemas'])
  }
}
