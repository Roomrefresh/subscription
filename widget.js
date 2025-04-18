// widget.js

(function() {
  // Create popup overlay
  var overlay = document.createElement("div");
  overlay.id = "popupOverlay";
  overlay.style.display = "none";
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(0,0,0,0.5)";
  overlay.style.zIndex = 9998;

  // Create popup box
  var box = document.createElement("div");
  box.id = "popupBox";
  box.style.display = "none";
  box.style.position = "fixed";
  box.style.top = "30%";
  box.style.left = "50%";
  box.style.transform = "translate(-50%, -50%)";
  box.style.background = "#fff";
  box.style.borderRadius = "10px";
  box.style.padding = "20px";
  box.style.zIndex = 9999;
  box.style.boxShadow = "0 0 15px rgba(0,0,0,0.3)";

  box.innerHTML = `
    <p style="margin:0;">🎉 Please, Renew Subscriptions!<br>Nawalpur Samaj South Korea</p>
    <button id="closePopupBtn" style="margin-top:10px;">Close</button>
    <button id="subscribeBtn" style="margin-top:10px;">Subscribe</button>
  `;

  // Append to body
  document.body.appendChild(overlay);
  document.body.appendChild(box);

  // Popup logic
  var popupBox = document.getElementById("popupBox");
  var popupOverlay = document.getElementById("popupOverlay");
  var closeBtn = document.getElementById("closePopupBtn");
  var subscribeBtn = document.getElementById("subscribeBtn");
  var popupVisible = false;
  var allowPopup = true;

  function showPopup() {
    if (!popupVisible && allowPopup) {
      popupBox.style.display = "block";
      popupOverlay.style.display = "block";
      popupVisible = true;
    }
  }

  function closePopup() {
    popupBox.style.display = "none";
    popupOverlay.style.display = "none";
    popupVisible = false;
    allowPopup = false;
    setTimeout(() => {
      allowPopup = true;
    }, 5000);
  }

  function openPreview() {
    window.open("https://drive.google.com/file/d/1AUx2WTULXWvWtWXYasn4NmA__uRZWS2b/preview", "_blank");
  }

  document.addEventListener("mousemove", showPopup);
  overlay.addEventListener("click", closePopup);

  // Wait until buttons exist in DOM
  setTimeout(() => {
    document.getElementById("closePopupBtn").addEventListener("click", closePopup);
    document.getElementById("subscribeBtn").addEventListener("click", openPreview);
  }, 100);
})();
