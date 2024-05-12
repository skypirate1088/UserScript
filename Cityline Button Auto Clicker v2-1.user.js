// ==UserScript==
// @name         Cityline Button Auto Clicker v2
// @namespace    YourNamespace
// @version      1
// @description  Monitors the "前往購票" button and clicks it when it appears
// @match        https://*.cityline.com/*
// @exclude      https://www.cityline.com/*/Login.html*
// @exclude      https://venue.cityline.com/utsvInternet/internet/shoppingBasket*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cityline.com
// @grant        none
// ==/UserScript==

// This is a hypothetical script and may not work on all websites.
// Replace 'buyTicketBtn' with the actual ID of the button on the website.

(function() {
    'use strict';

    // Function to check for button availability and click
    function clickBuyTicketButton() {
        // Find the button by ID
        var buyButton = document.getElementById('buyTicketBtn');

        // If the button is found and it is not disabled
        if (buyButton && !buyButton.disabled) {
            console.log('Button found and clicked!');
            // Click the button
            buyButton.click();
        } else {
            console.log('Button not available yet, retrying in 1 second...');
            // Retry after 1 second if the button is not available
            setTimeout(clickBuyTicketButton, 100);
        }
    }

    // Start the process
    clickBuyTicketButton();
})();