import { RestaurantService } from './restaurants.service';
import { Restaurant } from './restaurant/restaurant.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

 restaurants:Restaurant[]

  constructor(private rs: RestaurantService) {
    
   }

  ngOnInit() {
    this.rs.getRestaurants()
      .subscribe(rs => this.restaurants = rs);
  }

}
