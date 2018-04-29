import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RoutingModule} from './routing/routing.module';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SearchComponent} from './search/search.component';
import {TableComponent} from './table/table.component';
import {MainBlockComponent} from './main-block/main-block.component';
import {InfoBlockComponent} from './info-block/info-block.component';
import {ThumbnailComponent} from './thumbnail/thumbnail.component';
import {SideBlockComponent} from './side-block/side-block.component';

import {AutoGrowDirective} from './auto-grow.directive';
import {FilterPipe} from './filter.pipe';

import {ProductService} from './product.service';
import {TotalService} from './total.service';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    TableComponent,
    MainBlockComponent,
    InfoBlockComponent,
    ThumbnailComponent,
    SideBlockComponent,
    AutoGrowDirective,
    FilterPipe,
    ProductsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [ProductService, TotalService],    // to be singleton to all componenet
  bootstrap: [AppComponent]
})
export class AppModule {
}
