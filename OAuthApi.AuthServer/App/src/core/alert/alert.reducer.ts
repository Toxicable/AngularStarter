import { ActionReducer, Action } from '@ngrx/store';
import { Alert } from '../../core/models/alert.model';
import { AlertActions, AlertActionTypes } from './alert.actions';

const initalState: Alert[] = []

export const alertReducer = (state = initalState, action: AlertActions): Alert[] => {
    switch (action.type){
        case AlertActionTypes.ADD:
            return [
                ...state,
                action.payload
            ];

        case AlertActionTypes.DELETE:
            return state.filter( alert =>
                alert.message !== action.payload.message
            );

        default:
            return state;
    }
};