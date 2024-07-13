import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StdformService {
  
  private apiUrl="http://localhost:1101/sform";
  constructor(private http:HttpClient){ }

  sformUser(data:any){
    return this.http.post(this.apiUrl, data)
  }

  // getForm(){
  //   return this.http.get(this.url)
  // }

  getStudentsByBatch(batchName: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?batchName=${batchName}`);
 }



}


