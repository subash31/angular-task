import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,FormArray} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {
productform:FormGroup;
constructor(private http: HttpClient) { }

  ngOnInit() {
    this.productform=new FormGroup({
      email:new FormControl('email'),
      productId:new FormControl('productId'),
      productname:new FormControl('productname')
    });
  }

  onsubmit(){
    console.log(this.productform.value);
    console.log(this.productform.valid);
    this.http.post("http://localhost:3000/product",this.productform.value)
    .subscribe((data)=>{
      console.log(data)
    })
  }

}
