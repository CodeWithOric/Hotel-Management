
function setTab(tabType) 
{
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => tab.classList.remove("active"));

  if (tabType === 'user') 
  {
    tabs[0].classList.add("active");
  }

   else 
   {
    tabs[1].classList.add("active");
  }
}


const toggleBtn = document.getElementById("toggle-dark-mode");
const body = document.body;

function applyDarkMode(state) 
{
  if (state) 
  {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
  }
  else 
  {
    body.classList.remove("dark-mode");
    toggleBtn.textContent = "🌙";
  }
}

toggleBtn.addEventListener
("click", () =>{

  const isDark = body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDark);
  toggleBtn.textContent = isDark ? "☀️" : "🌙";

});


window.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("darkMode") === "true";
  applyDarkMode(savedMode);
});

