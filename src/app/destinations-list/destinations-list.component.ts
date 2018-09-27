import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Destination } from '../destination';


@Component({
  selector: 'app-destinations-list',
  templateUrl: './destinations-list.component.html',
  styleUrls: ['./destinations-list.component.css']
})
export class DestinationsListComponent implements OnInit {

  constructor(public apiService:ApiService, public router:Router) { }

  ngOnInit() {
    this.apiService.get("destinations").subscribe((data:Destination[]) => {
      console.log(data);
      this.rows = data;
    });
  }

  public columns = ['id', 'country', 'city'];
  public rows : Array<Destination>;

  public delete_method(id:string) {
    console.log("delete : " + id);
    var path = 'destinations/' + id;
    this.apiService.delete_method(path).subscribe((r) => {
      this.rows = this.rows.filter((p,i) => {

        if(Number(id) === p.id) {
          return false;
        }
        return true;
      }, this.rows)
    });
  }

  public update(id:string) {
    console.log("update : " + id);
    this.router.navigateByUrl('/destinations/add/' + id);
  }
}
