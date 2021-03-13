//function suma (a, b){
//	return a + b + 100;
//}


//(a, b) => a + b + 100;


function switchDarkMode() {
    //console.log("Activamos/desactivamos el dark mode");
    alert("Activamos/desactivamos el dark mode");
}

function loadHeader(){
    $("header").load("./webparts/header.html");
}

function loadSidebar(){
    $("#sidebar").load("./webparts/sidebar.html");
}

function loadFooter() {
    $("footer").load("./webparts/footer.html");
}