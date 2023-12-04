btn=document.getElementById("nav_btn")
btn.addEventListener("click", () => {
  notes=document.getElementById("notepad")
  notes.classList.toggle("notes_invisible");
  notes.classList.toggle("notes_visible")
  if (page_title == "Room Mates"){
    page_title = "Notes"
    data

  } else if (page_title == "Notes") {
    page_title = "Room Mates"
    
    text_area=document.querySelectorAll("note_field")
    text_area.forEach(element => {
      note=text_area.value
      
    });
  } else {
    page_title="Notes"
  }
  document.getElementById("page_title").innerHTML=page_title
  });

  

  