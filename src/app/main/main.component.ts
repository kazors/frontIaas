import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  value:String
  listValue:String[] = new Array();
  result : String = "";


  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

  addToList(){
    this.listValue.push(this.value);
  }

  search(){
    this.listValue.forEach(element => {
      this.httpClient.get("http://127.0.0.1:8080/find/"+element).subscribe((data: string)  =>{
          console.log(data)
          this.result.concat(data);
      })
    });
    this.listValue=[]
  }

}
