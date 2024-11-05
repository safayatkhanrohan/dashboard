

const toggler = document.querySelector('[toggle="sidebar-toggler"]');
const sidebar = document.querySelector(".sidebar");

toggler.onclick = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth > 768) {
    sidebar.classList.toggle("collapsed");
  } else {
    const sidebarMenu = sidebar.querySelector(".sidebar-menu");
    sidebarMenu.classList.toggle("active");
  }
}

// take the user to the dashboard page

document.getElementById("login-form").onsubmit = e => {
  e.preventDefault();
  window.location.href = "dashboard.html";
}
