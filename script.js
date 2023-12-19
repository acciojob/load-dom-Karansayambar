//your JS code here. If required.
function onDOMLoad() {
            if (document.body.children.length === 0) {
                document.body.innerHTML = "DOM load success";
            } else {
                console.warn("Body already contains children. The string 'DOM load success' was not written.");
            }
        }
        document.addEventListener("DOMContentLoaded", onDOMLoad);