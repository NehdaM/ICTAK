import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StdformService } from '../services/stdform.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-batches',
  standalone: true,
  imports: [CommonModule,NgFor,FormsModule,ReactiveFormsModule],
  templateUrl: './batches.component.html',
  styleUrl: './batches.component.css'
})
export class BatchesComponent implements OnInit {
  
  batches = ['KKEM March CSA', 'KKEM March DSA','KKEM march MLAI', 'KKEM March FSD', 'KKEM March ST']; // Replace with the batch names
  selectedBatch!: string;
  students:any=[] = [];   //students

  constructor(
    
    private _sform: StdformService
  ) { }

  ngOnInit(): void {
    this.selectedBatch = this.batches[0];
    this.getFormDetail();  // getStudents
  }

  
  getFormDetail(): void{

    this._sform.getStudentsByBatch(this.selectedBatch).subscribe(data => {
    this.students= data;

    });
  }
  

  onBatchChange(): void {
    this.getFormDetail();
  }

}
