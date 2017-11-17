import { Component, OnInit } from '@angular/core';

import { FileuploadService } from '../fileupload.service';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-classified',
  templateUrl: './classified.component.html',
  styleUrls: ['./classified.component.css']
})
export class ClassifiedComponent implements OnInit {

  showSpinner = false;
  fileSelected: File;

  constructor(
    private fileuploadService: FileuploadService,
    private displayService: DisplayService
  ) { }

  ngOnInit() {
  }

  fileEvent($event): void {
    this.fileSelected = $event.target.files[0];
  }

  uploadFile(): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;

      console.log(this.fileSelected);
      this.fileuploadService.uploadClassifiedFile(this.fileSelected)
      .subscribe( (response) => {
         console.log('set any success actions...');
         this.displayService.setResult(response.data);
         return response;
       },
       (error) => {
          console.log('set any error actions...');
          this.displayService.setResult(error.message);
        });

    }, 2000);
  }

  reset(): void {
    console.log('reset');
    this.displayService.setResult('');
  }

}
