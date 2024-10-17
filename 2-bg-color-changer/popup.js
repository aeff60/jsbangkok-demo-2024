document.getElementById("changeColor").addEventListener("click", () => {
  const color = document.getElementById("color").value;

  // Send a message to the content script with the color value
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: changeBackgroundColor,
      args: [color],
    });
  });
});

// This function will be run in the content script context
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}
