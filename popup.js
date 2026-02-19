(function () {

  // Check if already shown
  if (localStorage.getItem("abdullah_popup_shown")) return;

  // Create CSS
  var style = document.createElement("style");
  style.innerHTML = `
  #abdullahPopupOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999;
  }

  #abdullahPopupBox {
    background: #111;
    color: #fff;
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    width: 320px;
    box-shadow: 0 0 25px #00ffcc;
    animation: abdullahAnim 0.4s ease;
  }

  #abdullahPopupBox h2 {
    color: #00ffcc;
    margin-bottom: 10px;
  }

  #abdullahPopupBox button {
    background: #00ffcc;
    border: none;
    padding: 10px 20px;
    margin-top: 10px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
  }

  #abdullahPopupBox button:hover {
    background: #00ccaa;
  }

  @keyframes abdullahAnim {
    from {transform: scale(0.6); opacity: 0;}
    to {transform: scale(1); opacity: 1;}
  }
  `;

  document.head.appendChild(style);


  // Create Popup HTML
  var popup = document.createElement("div");
  popup.id = "abdullahPopupOverlay";

  popup.innerHTML = `
    <div id="abdullahPopupBox">

      <h2>Join Update</h2>

      <p>Join for latest theme updates</p>

      <a href="https://t.me/ABDULLAHMETHOD" target="_blank">
        <button>Join Now</button>
      </a>

      <br>

      <button id="abdullahCloseBtn">Close</button>

    </div>
  `;

  document.body.appendChild(popup);


  // Close function
  document.getElementById("abdullahCloseBtn").onclick = function () {
    popup.remove();
  };


  // Save in localStorage
  localStorage.setItem("abdullah_popup_shown", "yes");

})();
