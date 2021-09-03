let hideIG = document.getElementById("hideBar1");
let hideTiktok = document.getElementById("hideBar2");

hideIG.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.storage.sync.get("hide1", ({ hide1 }) => {
    if (hide1 == false) {
      var hide1 = true;
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: hideIGBar,
        });
    }
    else {
      var hide1 = false;

      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: showIGBar,
      });
      
    }
    chrome.storage.sync.set({hide1});
  });
});

function hideIGBar() {
  if (window.location.href.includes("instagram.com")) {

    var likebar = document.getElementsByClassName("ZyFrc");
    var likebar2 = document.getElementsByClassName("fr66n");
    var like = document.getElementsByClassName("_8-yf5 ");
    var like_off = document.getElementsByClassName("_2ic5v");
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
}

function showIGBar() {
  if (window.location.href.includes("instagram.com")) {
    var likebar = document.getElementsByClassName("ZyFrc");
    var likebar2 = document.getElementsByClassName("fr66n");
    var like = document.getElementsByClassName("_8-yf5 ");
    var like_off = document.getElementsByClassName("_2ic5v");
    for (i = 0; i < likebar.length; i++ ) {
      if (likebar[i].closest(".Mr508") != null) {
        likebar[i].style = "";
      }
    }
    for (i = 0; i < likebar2.length; i++ ) {
      likebar2[i].style = "";
    }
    for (i = 0; i < like.length; i++ ) {
      if (like[i].getAttribute("aria-label").match("Like")) {
        if (like[i].closest(".Mr508") != null) {
          like[i].style = "";
        }
        else if (like[i].closest(".fr66n") != null) {
          like[i].setAttribute("fill", "#262626")
        }
      }
    }
    for (i = 0; i < like_off.length; i++ ) {
      if (like_off[i].closest(".EtaWk") != null) {
        like_off[i].style = "";
      }
    }
  }
}