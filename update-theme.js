(function(){

if(localStorage.getItem("popupShown")) return;

var popup = document.createElement("div");

popup.innerHTML = `
<style>
#joinPopupOverlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);display:flex;align-items:center;justify-content:center;z-index:99999;}
#joinPopupBox{background:#111;color:#fff;padding:30px;border-radius:15px;text-align:center;width:320px;box-shadow:0 0 20px #00ffcc;}
#joinPopupBox h2{color:#00ffcc;}
#joinPopupBox button{background:#00ffcc;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;}
</style>

<div id="joinPopupOverlay">
<div id="joinPopupBox">

<h2>Join Update</h2>

<p>Join for latest updates</p>

<a href="https://t.me/ABDULLAHMETHOD" target="_blank">
<button>Join Now</button>
</a>

<br><br>

<button onclick="document.getElementById('joinPopupOverlay').remove()">
Close
</button>

</div>
</div>
`;

document.body.appendChild(popup);

localStorage.setItem("popupShown",true);

})();
