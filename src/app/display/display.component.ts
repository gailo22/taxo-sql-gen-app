import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { DisplayService } from '../display.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  response: string = '';

  constructor(
    private displayService: DisplayService,
    public snackBar: MatSnackBar
  ) { 
    this.displayService.listen().subscribe((m:any) => {
      this.response = m;
    })
  }

  ngOnInit() {
  }

  copyToClipboard(): void {
    this.snackBar.open('Copied', '', {
      duration: 2000,
    });
  }

}
