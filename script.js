function ShowSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";

    const menuBar = document.querySelector("#menu_bar");
    menuBar.style.display = "none";
}

function HideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";

    const menuBar = document.querySelector("#menu_bar");
    menuBar.style.display = "block";
}



// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

/**************to top****************/

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () =>{
    if(window.scrollY > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})

const icon = document.getElementById("icon");
const logo = document.querySelector('#pras_logo');

icon.onclick = () =>{
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        logo.src = 'prashant_logo_white.png';
    }
    else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        logo.src = 'prashant_logo_black.png';
    }
}

// Function to show the corresponding hidden div
function showHiddenContent(event, id) {
    document.getElementById(id).classList.add('show');
}

// Function to hide all hidden divs
function hideAllHiddenContent() {
    document.querySelectorAll('.hidden-content').forEach(function(div) {
        div.classList.remove('show');
    });
}

// Add event listeners to the goal sections
document.getElementById('stg').addEventListener('mouseover', function(event) {
    hideAllHiddenContent();
    showHiddenContent(event, 'hide_1');
});

document.getElementById('ltg').addEventListener('mouseover', function(event) {
    hideAllHiddenContent();
    showHiddenContent(event, 'hide_2');
});

document.getElementById('lo').addEventListener('mouseover', function(event) {
    hideAllHiddenContent();
    showHiddenContent(event, 'hide_3');
});

// Hide the content again when the mouse leaves the goal sections
document.getElementById('stg').addEventListener('mouseout', hideAllHiddenContent);
document.getElementById('ltg').addEventListener('mouseout', hideAllHiddenContent);
document.getElementById('lo').addEventListener('mouseout', hideAllHiddenContent);


