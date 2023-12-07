btn=document.getElementById("nav_btn")

btn.addEventListener("click", () => {
    notes=document.getElementById("notepad")
    notes.classList.toggle("notes_invisible");
    notes.classList.toggle("notes_visible")
    page_title=document.getElementById("page_title")
    if (page_title.innerHTML == "Room Mates"){
        page_title.innerHTML="Notes"

    } else if (page_title.innerHTML == "Notes") {
        page_title.innerHTML="Room Mates"
    } 
  });

  

  