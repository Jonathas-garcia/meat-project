var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from 'app/app.api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from 'app/app.error-handler';
var RestaurantService = (function () {
    function RestaurantService(http) {
        this.http = http;
    }
    RestaurantService.prototype.getRestaurants = function () {
        return this.http.get(MEAT_API + "/restaurants")
            .map(function (response) { return response.json(); })
            .catch(ErrorHandler.handleError);
    };
    RestaurantService.prototype.getRestaurantById = function (id) {
        return this.http.get(MEAT_API + "/restaurants/" + id)
            .map(function (response) { return response.json(); })
            .catch(ErrorHandler.handleError);
    };
    RestaurantService.prototype.reviewsOfRestaurant = function (id) {
        return this.http.get(MEAT_API + "/restaurants/" + id + "/reviews")
            .map(function (response) { return response.json(); })
            .catch(ErrorHandler.handleError);
    };
    RestaurantService.prototype.menuOfRestaurants = function (id) {
        return this.http.get(MEAT_API + "/restaurants/" + id + "/menu")
            .map(function (response) { return response.json(); })
            .catch(ErrorHandler.handleError);
    };
    return RestaurantService;
}());
RestaurantService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], RestaurantService);
export { RestaurantService };
//# sourceMappingURL=restaurants.service.js.map