// Listen for audio events on the active tab
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
      // Refresh the page
      console.log("stopeed");
      location.reload();
    }
  });
  
  // Listen for messages from the content script
  chrome.runtime.onMessage.addListener((message, sender) => {
    if (message.type === 'audio-stopped') {
      // Play the video and fullscreen it
      chrome.tabs.executeScript({
        code: `
          const video = document.querySelector('video');
          if (video) {
            video.play();
            video.requestFullscreen();
          }
        `
      });
    }
  });
console.log("hey");