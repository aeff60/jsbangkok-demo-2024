document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        function: getDesignMode,
      },
      (result) => {
        const currentMode = result[0].result;
        updateButton(currentMode);
      }
    );
  });

  document.getElementById("toggleEdit").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          function: toggleDesignMode,
        },
        (result) => {
          const newMode = result[0].result;
          updateButton(newMode);
        }
      );
    });
  });
});

function updateButton(mode) {
  const button = document.getElementById("toggleEdit");
  if (mode === "on") {
    button.textContent = "OFF";
    button.classList.remove("off");
    button.classList.add("on");
  } else {
    button.textContent = "ON";
    button.classList.remove("on");
    button.classList.add("off");
  }
}

function toggleDesignMode() {
  if (document.designMode === "on") {
    document.designMode = "off";
  } else {
    document.designMode = "on";
  }
  return document.designMode; // ส่งกลับสถานะใหม่ของ designMode
}

function getDesignMode() {
  return document.designMode; // ส่งกลับสถานะปัจจุบันของ designMode
}
