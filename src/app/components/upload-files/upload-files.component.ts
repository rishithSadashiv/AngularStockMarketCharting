import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import * as XL from 'xlsx';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

  data: any;
  constructor(private us:UploadService) { }

  ngOnInit(): void {
  }

  fileSelected($event){
    const file = $event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const workbook = XL.read(reader.result, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = XL.utils.sheet_to_json(sheet);
      this.data = json;
    }
    reader.readAsBinaryString(file);
  }

  upload() {
    console.log(this.data);
    this.us.upload(this.data).subscribe(
      res => { alert("Uploaded"); },
      err => { console.log(err); alert("Failed to upload"); }
    );
  }

}
