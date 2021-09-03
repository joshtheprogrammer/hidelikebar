let hide1 = false;
let hide2 = false;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ hide1 });
  chrome.storage.sync.set({ hide2 });
});

chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function(tab){
    console.log(tab.url);
    onStartIG();
  });
  
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  onStartIG();
}); 

async function onStartIG() {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: hideIGBar,
    });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: BUTTONPRESSED,
    });
}

function hideIGBar() {
  if (window.location.href.includes("instagram.com")) {
    chrome.storage.sync.get("hide1", ({ hide1 }) => {
      if (hide1 == true) {
        let likebar = document.getElementsByClassName("ZyFrc");
        let likebar2 = document.getElementsByClassName("fr66n");
        let like = document.getElementsByClassName("_8-yf5 ");
        let like_off = document.getElementsByClassName("_2ic5v");
        for (i = 0; i < likebar.length; i++ ) {
          if (likebar[i].closest(".Mr508") != null) {
            likebar[i].style = "pointer-events:none;";
          }
        }
        for (i = 0; i < likebar2.length; i++ ) {
          likebar2[i].style = "pointer-events:none;";
        }
        for (i = 0; i < like.length; i++ ) {
          if (like[i].getAttribute("aria-label").match("Like")) {
            if (like[i].closest(".Mr508") != null) {
              like[i].style = "display: none";
            }
            else if (like[i].closest(".fr66n") != null) {
              like[i].setAttribute("fill", "white")
            }
          }
        }
        for (i = 0; i < like_off.length; i++ ) {
          if (like_off[i].closest(".EtaWk") != null) {
            like_off[i].style = "display: none; pointer-events:none;";
          }
        }
      }
    });
  }
}

function BUTTONPRESSED() {
  if (window.location.href.includes("instagram.com")) {

    button02 = document.getElementsByClassName("sqdOP yWX7d    y3zKF     ");
    for (i = 0; i < button02.length; i++) {
      button02[i].addEventListener('click', function() {
        chrome.storage.sync.get("hide1", ({ hide1 }) => {
          if (hide1 == true) {
            let likebar = document.getElementsByClassName("ZyFrc");
        let likebar2 = document.getElementsByClassName("fr66n");
        let like = document.getElementsByClassName("_8-yf5 ");
        let like_off = document.getElementsByClassName("_2ic5v");
        for (i = 0; i < likebar.length; i++ ) {
          if (likebar[i].closest(".TCSYW") != null) {
            likebar[i].style = "pointer-events:none;";
          }
        }
        for (i = 0; i < likebar2.length; i++ ) {
          likebar2[i].style = "pointer-events:none;";
        }
        for (i = 0; i < like.length; i++ ) {
          if (like[i].getAttribute("aria-label").match("Like")) {
            if (like[i].closest(".TCSYW") != null) {
              like[i].style = "display: none";
            }
            else if (like[i].closest(".fr66n") != null) {
              like[i].setAttribute("fill", "white")
            }
          }
        }
        for (i = 0; i < like_off.length; i++ ) {
          if (like_off[i].closest(".EtaWk") != null) {
            like_off[i].style = "display: none; pointer-events:none;";
          }
        }
        }
        });
      });
    }

    button01 = document.getElementsByClassName("                     Igw0E     IwRSH        YBx95       _4EzTm                                                                                                            NUiEW  ")[0];
    button01.addEventListener('click', function() {
      chrome.storage.sync.get("hide1", ({ hide1 }) => {
        if (hide1 == true) {
          let likebar = document.getElementsByClassName("ZyFrc");
        let likebar2 = document.getElementsByClassName("fr66n");
        let like = document.getElementsByClassName("_8-yf5 ");
        let like_off = document.getElementsByClassName("_2ic5v");
        for (i = 0; i < likebar.length; i++ ) {
          if (likebar[i].closest(".Mr508") != null) {
            likebar[i].style = "pointer-events:none;";
          }
        }
        for (i = 0; i < likebar2.length; i++ ) {
          likebar2[i].style = "pointer-events:none;";
        }
        for (i = 0; i < like.length; i++ ) {
          if (like[i].getAttribute("aria-label").match("Like")) {
            if (like[i].closest(".Mr508") != null) {
              like[i].style = "display: none";
            }
            else if (like[i].closest(".fr66n") != null) {
              like[i].setAttribute("fill", "white")
            }
          }
        }
        for (i = 0; i < like_off.length; i++ ) {
          if (like_off[i].closest(".EtaWk") != null) {
            like_off[i].style = "display: none; pointer-events:none;";
          }
        }
        }
      });
    })
    
  }
}