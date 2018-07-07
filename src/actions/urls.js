export const INCOMING_ORDERS_API = 'https://my-json-server.typicode.com/sloom1415/test-api/IncomingOrders';
export const OUTGOING_ORDERS_API = 'https://my-json-server.typicode.com/sloom1415/test-api/IncomingOrders';
export const INCOMING_PKGS_API = '';
export const OUTGOING_PKGS_API = '';
export const ITEMS_API = 'https://my-json-server.typicode.com/sloom1415/test-api/names';
export let CURRENT_ORDERS_API = INCOMING_ORDERS_API;

export function setCurrentApi(url) {
    CURRENT_ORDERS_API = url;
    console.log(CURRENT_ORDERS_API);
}