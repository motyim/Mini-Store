import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { TableComponent } from './table/table.component';
import { MainBlockComponent } from './main-block/main-block.component';
import { InfoBlockComponent } from './info-block/info-block.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { SideBlockComponent } from './side-block/side-block.component';
import { AutoGrowDirective } from './auto-grow.directive';
import { FilterPipe } from './filter.pipe';
import { ProductService } from './product.service';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductService],    // to be singleton to all componenet
  bootstrap: [AppComponent]
})
export class AppModule { }
