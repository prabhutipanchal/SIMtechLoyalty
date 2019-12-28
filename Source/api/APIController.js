import * as APICaller from './APICaller';
import { User } from '../prototypes/User';
import { appUser } from '../../App';

/**
 * This object represents the error that occurred in any api call that APIController has to offer
 * 
 * @param {String|Number} code Status code
 * @param {String} message Error message
 */
export function APIControllerError(code, message) {
    this.code = code
    this.message = message
}

/**
 * This object represents the output format for all api calls that APIController has to offer
 * 
 * @param {JSON} object - JSON representation of the object
 * @param {JSON|APIControllerError} error - Representation of the error
 */
export function APIControllerResponse(object, error) {
    this.object = object
    this.error = error
}




export function Login(Username, Password, Deviceid, Token, Devicename, Devicetypeid, Appversion) {
    return new Promise((resolve, reject) => {
        APICaller.Login(Username, Password, Deviceid, Token, Devicename, Devicetypeid, Appversion).then((response) => {
            if (response && response.status === 0) {
                let error = new APIControllerError(response.status, response.message);
                resolve(new APIControllerResponse(null, error));
            }
            else if (response && response.data) {
                // let user = new User(response.data);
                // user.writeToLocalStorage();
                resolve(new APIControllerResponse(response, null));
            }
        }).catch((error) => {
            resolve(new APIControllerResponse(null, error));
        });
    });
}

export function GetNotifications(Userid) {
    return new Promise((resolve, reject) => {
        APICaller.GetNotifications(Userid).then((response) => {
            if (response && response.status === 0) {
                let error = new APIControllerError(response.status, response.message);
                resolve(new APIControllerResponse(null, error));
            }
            else if (response && response.data) {
                // let user = new User(response.data);
                // user.writeToLocalStorage();
                resolve(new APIControllerResponse(response, null));
            }
        }).catch((error) => {
            resolve(new APIControllerResponse(null, error));
        });
    });
}
