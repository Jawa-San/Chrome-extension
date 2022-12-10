// Listen for audio events on the page
document.addEventListener('audio-stopped', () => {
    // Send a message to the background script
    console.log("STOPED");
    chrome.runtime.sendMessage({
      type: 'audio-stopped'
    });
  });
  console.log("yo man");