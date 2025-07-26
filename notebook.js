 function addNote() {
      const container = document.getElementById("notesContainer");
      const newTextarea = document.createElement("textarea");
      newTextarea.placeholder = "Keep note anything...";
      container.appendChild(newTextarea);
    }