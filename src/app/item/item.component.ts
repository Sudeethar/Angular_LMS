import { Component, OnInit } from '@angular/core';
import { shallowEqual } from '@angular/router/src/utils/collection';
import { Book } from '../book';
 
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  book : Book;
  constructor() { }

  ngOnInit() {
    // call js function
    this.book = new Book();
  }

  save(){
    //alert(1234);
    console.log(this.book);
  }

  show(value){
    if(value == "Book"){
      alert("Book cliked");
    }
  }

}