function activate(event, tab) {
    var tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    var tabbtns = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabbtns.length; i++) {
        tabbtns[i].classList.remove("active");
    }

    document.getElementById(tab).classList.add("active");
    event.currentTarget.classList.add("active");
}