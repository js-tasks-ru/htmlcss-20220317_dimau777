document.addEventListener("DOMContentLoaded", () => {
    let allTab = document.getElementById("all-tab")
    let elementsTab = document.getElementById("elements-tab")
    let containersTab = document.getElementById("containers-tab")
    let templatesTab = document.getElementById("templates-tab")

    let elements = document.getElementsByClassName("type-element");
    let containers = document.getElementsByClassName("type-container");
    let templates = document.getElementsByClassName("type-template");

    allTab.onclick = function () {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "flex";
        }
        for (let i = 0; i < containers.length; i++) {
            containers[i].style.display = "flex";
        }
        for (let i = 0; i < templates.length; i++) {
            templates[i].style.display = "flex";
        }
    }

    elementsTab.onclick = function () {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "flex";
        }
        for (let i = 0; i < containers.length; i++) {
            containers[i].style.display = "none";
        }
        for (let i = 0; i < templates.length; i++) {
            templates[i].style.display = "none";
        }
    }

    containersTab.onclick = function () {
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
        }
        for (let i = 0; i < containers.length; i++) {
            containers[i].style.display = "flex";
        }
        for (let i = 0; i < templates.length; i++) {
            templates[i].style.display = "none";
        }
    }

    templatesTab.onclick = function () {
        for (let i = 0; i < elements.length; i++) {
           elements[i].style.display = "none";
        }
        for (let i = 0; i < containers.length; i++) {
            containers[i].style.display = "none";
        }
        for (let i = 0; i < templates.length; i++) {
            templates[i].style.display = "flex";
        }
    }
});




