import { LoginService } from './login/login.service';
import { CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggedinGuard implements CanLoad, CanActivate {

    constructor(private loginService: LoginService) { }

    checkAuthentication(path: string): boolean {
        const loggedin = this.loginService.isLoggedIn();
        if (!loggedin) {
            this.loginService.handleLogin(`/${path}`);
        }
        return loggedin;
    }

    canLoad(route: Route): boolean {
       return this.checkAuthentication(route.path);
    }

    canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
        return this.checkAuthentication(activatedRoute.routeConfig.path);
    }


}