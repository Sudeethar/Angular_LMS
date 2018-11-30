import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { MenuComponent } from './menu/menu.component';
import { ItemListComponent } from './item-list/item-list.component';
import { BookComponent } from './book/book.component';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    MenuComponent,
    ItemListComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [FormsModule,BrowserModule, HttpModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
