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
