console.log('BACK WORKS')

chrome.runtime.onMessage.addListener(function (message, sender, sendResponce) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message);
    });
});