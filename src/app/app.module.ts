import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DestinationsAddComponent } from './destinations-add/destinations-add.component';
import { DestinationsListComponent } from './destinations-list/destinations-list.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DestinationsAddComponent,
    DestinationsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'destinations',
        component: DestinationsListComponent
      },
      {
        path: 'destinations/add',
        component: DestinationsAddComponent
      },
      {
        path: 'destinations/add/:id',
        component: DestinationsAddComponent
      }
    ])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
