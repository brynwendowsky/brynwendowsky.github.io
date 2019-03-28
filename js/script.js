var current = 0,
    slides = document.getElementsByClassName("slidecontainer");

setInterval(function() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = (current != slides.length - 1) ? current + 1 : 0;
  slides[current].style.opacity = 1;
}, 4000);


//
    
function joshuaTime(){
    var currentTime = new Date().getHours();
    if (7 <= currentTime&&currentTime < 19)
    {document.getElementById("joshuajumbo").style.backgroundImage = "url(images/joshuatreejumbobanner.jpg)";}
    else {document.getElementById("joshuajumbo").style.backgroundImage = "url(images/joshuatreejumbobannernight.jpg)"}
}

//

function smokyTime(){
    var currentTime = new Date().getHours();
    if (7 <= currentTime&&currentTime < 19)
    {document.getElementById("smokyjumbo").style.backgroundImage = "url(images/smokymountainsdaybanner.jpg)";}
    else {document.getElementById("smokyjumbo").style.backgroundImage = "url(images/smokymountainsnight.jpg)"}
}

//

function yosemiteTime(){
    var currentTime = new Date().getHours();
    if (7 <= currentTime&&currentTime < 19)
    {document.getElementById("yosemitejumbo").style.backgroundImage = "url(images/yosemitejumbobanner.jpg)";}
    else {document.getElementById("yosemitejumbo").style.backgroundImage = "url(images/yosemitejumbobannernight.jpg)"}
}

//

function yellowstoneTime(){
    var currentTime = new Date().getHours();
    if (7 <= currentTime&&currentTime < 19)
    {document.getElementById("yellowstonejumbo").style.backgroundImage = "url(images/yellowstonedaybanner.jpg)";}
    else {document.getElementById("yellowstonejumbo").style.backgroundImage = "url(images/yellowstonebannernight.jpg)"}
}

//

function redwoodTime(){
    var currentTime = new Date().getHours();
    if (7 <= currentTime&&currentTime < 19)
    {document.getElementById("redwoodjumbo").style.backgroundImage = "url(images/redwooddaybanner.jpg)";}
    else {document.getElementById("redwoodjumbo").style.backgroundImage = "url(images/redwoodnightbanner.jpg)"}
}

//

function olympicTime(){
    var currentTime = new Date().getHours();
    if (7 <= currentTime&&currentTime < 19)
    {document.getElementById("olympicjumbo").style.backgroundImage = "url(images/olympicbannerday.jpg)";}
    else {document.getElementById("olympicjumbo").style.backgroundImage = "url(images/olympicbannernight.jpg)"}
}

//

function northcascadesTime(){
    var currentTime = new Date().getHours();
    if (7 <= currentTime&&currentTime < 19)
    {document.getElementById("cascadesjumbo").style.backgroundImage = "url(images/northcascadesdaybanner.jpg)";}
    else {document.getElementById("cascadesjumbo").style.backgroundImage = "url(images/northcascadesnightbanner.jpg)"}
}
    
//

function grandtetonTime(){
    var currentTime = new Date().getHours();
    if (7 <= currentTime&&currentTime < 19)
    {document.getElementById("tetonjumbo").style.backgroundImage = "url(images/grandtetonbannerday.jpg)";}
    else {document.getElementById("tetonjumbo").style.backgroundImage = "url(images/grandtetonbannernight.jpg)"}
}

//
    
function canyonTime(){
    var currentTime = new Date().getHours();
    if (7 <= currentTime&&currentTime < 19)
    {document.getElementById("canyonjumbo").style.backgroundImage = "url(images/grandcanyonbannerday.jpg)";}
    else {document.getElementById("canyonjumbo").style.backgroundImage = "url(images/grandcanyonbannernight.jpg)"}
}

//

function glacierTime(){
    var currentTime = new Date().getHours();
    if (7 <= currentTime&&currentTime < 19)
    {document.getElementById("glacierjumbo").style.backgroundImage = "url(images/glacierdaybanner.jpg)";}
    else {document.getElementById("glacierjumbo").style.backgroundImage = "url(images/glaciernightbanner.jpg)"}
}
    
//

function denaliTime(){
    var currentTime = new Date().getHours();
    if (7 <= currentTime&&currentTime < 19)
    {document.getElementById("denalijumbo").style.backgroundImage = "url(images/denalidaybanner.jpg)";}
    else {document.getElementById("denalijumbo").style.backgroundImage = "url(images/denalinightbanner.jpg)"}
}
    
//

function evergladesTime(){
    var currentTime = new Date().getHours();
    if (7 <= currentTime&&currentTime < 19)
    {document.getElementById("evergladesjumbo").style.backgroundImage = "url(images/evergladesdaybanner.jpg)";}
    else {document.getElementById("evergladesjumbo").style.backgroundImage = "url(images/evergladesnightbanner.jpg)"}
}

//

function zionTime(){
    var currentTime = new Date().getHours();
    if (7 <= currentTime&&currentTime < 19)
    {document.getElementById("zionjumbo").style.backgroundImage = 
    "url(images/ziondaybanner.jpg)";}
    else {document.getElementById("zionjumbo").style.backgroundImage = "url(images/zionnightbanner.jpg)"}
}

//

function archesTime(){
    var currentTime = new Date().getHours();
    if (7 <= currentTime&&currentTime < 19)
    {document.getElementById("archesjumbo").style.backgroundImage = "url(images/archesdaybanner.jpg)";}
    else {document.getElementById("archesjumbo").style.backgroundImage = "url(images/archesnightbanner.jpg)"}
}

//

function ValidationEvent(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comments").value;
    var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(name != '' && email != '' && comments !=''){
    if(email.match(emailReg)){
        alert("Thank you!");
        return true;
    }   else{
        alert("Invalid Email Address");
        return false;
    }
    }
}
    
