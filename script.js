//your JS code here. If required.

document.addEventListener("DOMContentLoaded", function() {
    function onDOMLoad() {
        const para = document.createElement("p");
        para.innerText = "DOM load success";
        document.body.appendChild(para);
    }
    onDOMLoad(); // Call the function after DOMContentLoaded
});