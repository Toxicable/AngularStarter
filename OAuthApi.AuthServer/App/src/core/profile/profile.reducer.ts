import { ActionReducer, Action, Store } from '@ngrx/store';
import { ProfileModel } from '../models/profile-model';
import { Injectable } from '@angular/core';
import { AppState } from '../../app/app-store';
import { ProfileActions, ProfileActionTypes } from './profile.actions';

const initialState: ProfileModel = {
    role: [""],
    sub: null,
    jti: null,
    at_hash: null,
    useage: null,
    nbf: null,
    exp: null,
    iat: null,
    iss: null,
    unique_name: null,
    email_confirmed: false,
    first_name: null,
    last_name: null
}
 
export const profileReducer = (state = initialState, action: ProfileActions): ProfileModel => {
    switch (action.type){
        case ProfileActionTypes.LOAD:
            return action.payload

        case ProfileActionTypes.DELETE:
            return initialState

        default:
            return state;
    }
};