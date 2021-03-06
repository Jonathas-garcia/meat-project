import { HttpClient, HttpParams } from '@angular/common/http';
import { Restaurant } from './restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import { MEAT_API } from 'app/app.api';
import { Observable } from 'rxjs';


import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantService {

    constructor(private http: HttpClient) { }

    getRestaurants(search?: string): Observable<Restaurant[]> {
        let params: HttpParams;
        if (search) {
            params = new HttpParams().set('q', search);
        }

        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, { params: params });
    }

    getRestaurantById(id: string): Observable<Restaurant> {
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`);
    }

    reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get<any>(`${MEAT_API}/restaurants/${id}/reviews`);
    }

    menuOfRestaurants(id: string): Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
    }

}
