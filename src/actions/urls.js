export const INCOMING_ORDERS_API = 'http://192.168.43.99/api/whss/';
export const OUTGOING_ORDERS_API = 'https://my-json-server.typicode.com/sloom1415/test-api/names';
export const INCOMING_PKGS_API = '';
export const OUTGOING_PKGS_API = '';
export const ITEMS_API = 'https://my-json-server.typicode.com/sloom1415/test-api/names';
export let CURRENT_ORDERS_API = 'http://192.168.43.99/api/whss/';

export function setCurrentApi(url) {
    CURRENT_ORDERS_API = url;
    console.log(CURRENT_ORDERS_API);
}