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

function create()
{
  const li = document.createElement("li");
  li.classList.add("state");
  const markup = `
    <h2 class="Data" data-name="region">
      <span>Ca</span>
      <sup>Us</sup>
    </h2>
    `;
  li.innerHTML = markup;
  list.appendChild(li); 
}