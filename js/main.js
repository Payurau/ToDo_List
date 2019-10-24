try{
    
/* poista itemi listalta */

var close = document.getElementsByClassName("delbtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    (this).closest("li").remove();
  }
}
    

// uuden taskin luonti, add-nappia painaessa

function newTask() {
    
    //hae inputista teksti
  var addlistItem = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var create = document.createTextNode(inputValue);
  addlistItem.appendChild(create);
    
    //uusi checkboxi
    var newcheck = document.createElement("input");
    newcheck.type="checkbox";
    newcheck.style.marginRight="30px";
    addlistItem.appendChild(newcheck);
    
    //luodaan uusi delete nappula
    var newdelete = document.createElement("button");
    newdelete.innerHTML="Delete";7
    newdelete.style.backgroundColor="cornsilk";
    newdelete.style.float="right";
    newdelete.style.padding="4px 10px 4px 10px";
    newdelete.style.fontSize="15px";
    newdelete.className="delbtn";
    newdelete.onclick=function () {
    (this).closest("li").remove();
};
    
    addlistItem.appendChild(newdelete);
    
    addlistItem.appendChild(newcheck);
    
   //jos käyttäjä ei syötä mitään, ilmoitetaan siitä 
  if (inputValue === '') {
    alert("Write something!");
  } else {
    document.getElementById("listItems").appendChild(addlistItem);
  }
    
  //tyhjennetään tekstikenttä
  var inputValue = document.getElementById("myInput").value="";

} 
   //tsekataan errorit 
}catch(error){
    alert("Jotain meni vikaan, päivitä sivu.");
}