// Zoom constants. Define Max, Min, increment and default values


function getCurrentWindowTabs() {
    return browser.tabs.query({ currentWindow: true });
}

document.addEventListener("click", (e) => {
    function callOnActiveTab(callback) {
        getCurrentWindowTabs().then((tabs) => {
            for (var tab of tabs) {
                if (tab.active) {
                    callback(tab, tabs);
                }
            }
        });
    }

    // if (e.target.id === "switch-proxy") {
    callOnActiveTab((tab, tabs) => {
        console.log(tab.url);
        // window.open(tab.url);
        var url = tab.url.toString();
        url = url.replace("https://", "");
        var arr = url.split("/");
        var rest = url.substring(arr[0].length + 1);
        var newdomain = "https://" + arr[0];
        newdomain = newdomain.replaceAll(".", "-") + ".accesdistant.sorbonne-universite.fr/" + rest;
        
        // var win = window.open(newdomain);
        browser.tabs.create({url: newdomain});
        console.log(newdomain);
    });
    // }

    e.preventDefault();
});
