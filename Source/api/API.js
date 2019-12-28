import React, { Component } from 'react';

/**
 * HTTP method types
 */
export const HTTPMethod = {
    get: "GET",
    post: "POST",
    put: "PUT",
    delete: "DELETE",
}


/**
 * Default HTTP header content types
 */
export const HTTPHeaderContentType = {
    json: "application/json",
    formURLEncoded: "application/x-www-form-urlencoded",
}

/**
 * A network utility class that performs all the necessary underlying HTTP piping and server authentication work for all HTTP request
 */
export class API extends Component {

    /**
     * Creates a promise that wraps an HTTP request configured with given parameters.
     * 
     * @param {String} method HTTP method
     * @param {String} url The target HTTP request URL
     * @param {props} body The body of the HTTP request
     */
    request(method, url, body) {
        
        return new Promise((resolve, reject) => {
            let headers = this.requestHeaders();
            fetch(url, {method: method, headers: headers, body: body})
            .then((response) => { return response.json(); })
            .then((responseJSON) => { resolve(responseJSON); })
            .catch((error) => { reject(error); });
        });
    }

    /**
     * Builds and returns a prop containing HTTP Header key-value pairs with the appropriate values populated.
     */
    requestHeaders() {
        return {
            "Accept": HTTPHeaderContentType.json,
            "Content-Type": HTTPHeaderContentType.json,
        }
    }
}

API.shared = new API();
