document.addEventListener("DOMContentLoaded", () => {
    const editableElements = document.querySelectorAll("[contenteditable='true']");
  
    // Listen for edits and log changes
    editableElements.forEach((element) => {
      element.addEventListener("input", (event) => {
        const target = event.target as HTMLElement;
        const section = target.dataset.section || "unknown";
        console.log(`Updated content in section: ${section}`);
      });
    });
  
  
  });
  