chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) {
      switch (command) {
        case "toggle-scroll":
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: toggleScroll,
          });
          break;
        case "increase-speed":
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: increaseSpeed,
          });
          break;
        case "decrease-speed":
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: decreaseSpeed,
          });
          break;
      }
    }
  });
});

function toggleScroll() {
  window.dispatchEvent(new CustomEvent("toggleScroll"));
}

function increaseSpeed() {
  window.dispatchEvent(new CustomEvent("increaseSpeed"));
}

function decreaseSpeed() {
  window.dispatchEvent(new CustomEvent("decreaseSpeed"));
}



