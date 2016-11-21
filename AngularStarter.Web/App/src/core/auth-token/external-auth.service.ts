import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Logger } from '../logger';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs';
import { AccountService } from '../account/account.service';

declare let FB: any;
declare let gapi: any;

// TODO: make this into a swappable service
@Injectable()
export class ExternalAuthService {

    constructor(private http: Http,
                private logger: Logger,
                private account: AccountService
    ) {}

    init() {
        FB.init({
            appId      : '', // appSettings.appSettings.auth.external.facebookAppId,
            status     : true,
            cookie     : true,
            xfbml      : false,
            version    : 'v2.8'
        });

        gapi.load('auth', () => {});
    }

    register(provider: string) {
        let accessToken$: Observable<any>;
        if (provider === 'Facebook') {
            accessToken$ = this.authorizeFacebook();
        }
        if (provider === 'Google') {
            accessToken$ = this.authorizeGoogle();
        }

        return accessToken$.flatMap((accessToken: string) => {
            return this.account.externalRegister({
                accessToken: accessToken,
                provider,
            });
        });
    }

    login(provider: string) {
        let accessToken$: Observable<any>;
        if (provider === 'Facebook') {
            accessToken$ = this.authorizeFacebook();
        }
        if (provider === 'Google') {
            accessToken$ = this.authorizeGoogle();
        }

        return accessToken$.flatMap((accessToken: string) => {
            return this.account.externalLogin({
                assertion: accessToken,
                provider,
            });
        });
    }

    private authorizeFacebook(): Observable<any> {
        return Observable.create( (observer: Observer<any>) => {
            try {
                FB.login((response: any) => {
                observer.next(response.authResponse.accessToken);
                observer.complete();
            }, {scope: 'email'});
            }catch (error) {
                observer.error(error);
            }
        });

    }

    private authorizeGoogle(): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            try {
                gapi.auth.authorize({
                    client_id: '', // appSettings.appSettings.auth.external.googleClientId,
                    scope: 'profile'
                }, (token: any) => {
                    observer.next(token.access_token);
                    observer.complete();
                });
            }catch (error) {
                observer.error(error);
            }
        });
    }
}
