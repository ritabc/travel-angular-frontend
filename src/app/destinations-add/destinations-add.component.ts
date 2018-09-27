import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Destination } from '../destination';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-destinations-add',
  templateUrl: './destinations-add.component.html',
  styleUrls: ['./destinations-add.component.css']
})
export class DestinationsAddComponent implements OnInit {

  constructor(public apiService:ApiService, public acRoute:ActivatedRoute) { }

  public destination:Destination = new Destination();

  ngOnInit() {
    this.acRoute.params.subscribe((data:any) => {
      console.log(data.id);
      if(data && data.id) {
        this.apiService.get("destinations/"+data.id).subscribe((data:Destination) => {
          this.destination = data;
        });
      }
      else
      {
        this.destination = new Destination();
      }
    });
  }

  public onSubmit() {
    console.log("Adding a destination: " + this.destination.city);
    if(this.destination.id) {
      this.apiService.update("destinations/" + this.destination.id, this.destination).subscribe((r) => {
        console.log(r);
        alert("Product updated!");
      });
    }
    else
    {
      this.apiService.post("destinations", this.destination).subscribe((r) => {
        console.log(r);
        this.destination = new Destination();
        alert("Product added!");
      });
    }
  }

}
