document.getElementById("changeColor").addEventListener("click", () => {
  const color = document.getElementById("color").value;

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: changeBackgroundColor,
      args: [color],
    });
  });
});

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}
