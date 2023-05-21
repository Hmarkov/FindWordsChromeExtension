document.addEventListener('DOMContentLoaded', function() {
  const highlightButton = document.getElementById('highlightButton');
  const wordInput = document.getElementById('wordInput');

  highlightButton.addEventListener('click', function() {
    const words = wordInput.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { action: 'highlight', words: words })
    });
  });
});
