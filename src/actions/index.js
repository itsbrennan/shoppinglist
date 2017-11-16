import $ from "jquery-ajax";

export function fetchShoppingList() {
    return function(dispatch) {
        dispatch(requestShoppingList());
        // When working with a full-stack app, we can reach out APIs by just
        // using the URL path. Since it's the same domain, we can leave that off.
        $.get("/api/items/").done(function(data) {
            dispatch(receiveShoppingList(data));
        });
    };
}

function requestShoppingList() {
    return {
        type: "REQUEST_SHOPPINGLIST"
    };
}

function receiveShoppingList(shoppingList) {
    return {
        type: "RECEIVE_SHOPPINGLIST",
        shoppingList
    };
}

export function addItem(item) {
    return function(dispatch) {
        // Use the POST method and include the contact JSON as the request body.
        $.ajax({
            url: '/api/items/',
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(item)
        }).done(function() {
            // After making the change, fetch the updated contact list.
            dispatch(fetchShoppingList());
        });
    };
}

export function removeItem(id) {
    return function(dispatch) {
        // Use the DELETE method.
        $.ajax({
            // When building URLs, encodeURIComponent helps keep the URL safe.
            url: '/api/items/' + encodeURIComponent(id),
            method: "DELETE"
        }).done(function() {
            // After making the change, fetch the updated contact list.
            dispatch(fetchShoppingList());
        });
    };
}