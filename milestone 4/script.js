document.addEventListener("DOMContentLoaded", function () {
    var editableElements = document.querySelectorAll("[contenteditable='true']");
    // Listen for edits and log changes
    editableElements.forEach(function (element) {
        element.addEventListener("input", function (event) {
            var target = event.target;
            var section = target.dataset.section || "unknown";
            console.log("Updated content in section: ".concat(section));
        });
    });
});
