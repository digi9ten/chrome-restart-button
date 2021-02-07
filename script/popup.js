

document.addEventListener('DOMContentLoaded', function() {
    const checkPageButton = document.getElementById('verifiedRestart');
    checkPageButton.addEventListener('click', function(event) {

        //chrome.runtime.restart();
        //chrome.document.location.href = 'chrome://restart';
        //chrome.document.location.href = 'google.com';

        // const command = event.data;
        // const name = event.data.name || 'hello';
        // alert("command: " + command + "\nname: " + name);

        //alert("event.view.location: " + event.view.location);

        //event.view.location = 'chrome://restart';

        //event.view.window.open('chrome://restart');

        chrome.tabs.create({url: "chrome://restart"});

        //const xhr = new XMLHttpRequest();
        //xhr.open("GET", chrome.extension.getURL('chrome://restart'), true);
        //xhr.open("GET", chrome.extension.redirect('chrome://restart'));
        //xhr.send();

        if(chrome.runtime.lastError) {
            // Something went wrong
            console.warn("errors: ", chrome.runtime.lastError.message);
            // Maybe explain that to the user too?
        } else {
            // No errors, you can use entry
        }

        // TODO: Add a delay field to the popup form, and then use it here...
        // chrome.runtime.restartAfterDelay(seconds: number, callback: function)
        // https://developer.chrome.com/docs/extensions/reference/runtime/#method-restartAfterDelay

    }, false);
}, false);
