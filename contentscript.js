(() => {
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      if (request.action === 'highlight') {
        const words = request.words.split(',');
        for (const word of words){
          const regex = new RegExp(`\\b${word}\\b`, 'gi');
          document.body.innerHTML = document.body.innerHTML.replace(regex,"<span style='background-color: "+getRandomColor()+"'>"+word+"</span>");
        }
      }
    });
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

  })();