import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { UploadResponse } from './uploadresponse'

@Injectable()
export class FileuploadService {

  private classifiedUrl = '/api/v1/classified';
  private notClassifiedUrl = '/api/v1/notclassified';

  constructor(
    private http: HttpClient
  ) { }

  uploadClassifiedFile(fileToUpload: File): Observable<UploadResponse> {
    const _formData = new FormData();
    _formData.append('file', fileToUpload, fileToUpload.name);   
    return this.http.post<any>(this.classifiedUrl, _formData);
  }

  uploadNotClassifiedFile(fileToUpload: File): Observable<UploadResponse> {
    const _formData = new FormData();
    _formData.append('file', fileToUpload, fileToUpload.name);   
    return this.http.post<any>(this.notClassifiedUrl, _formData);
  }

}
