const list = document.querySelector(".popup-section .location");

function toggleNav() 
{
    var nav_dimensions = document.getElementById("mySidenav").offsetWidth;
    if(nav_dimensions > 0)
    {
      closeNav();
    }
    else
    {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("items").style.marginLeft = "250px";
    }
}
  
function closeNav() 
{
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("items").style.marginLeft = "0";
} 


function positionedPopup(url,winName,w,h,t,l,scroll)
{
  var popupWindow = null;
  settings = 'height='+h+',width='+w+',top='+t+',left='+l+',scrollbars='+scroll+',resizable'
  popupWindow = window.open(url,winName,settings)
}

