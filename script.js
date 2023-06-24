shownotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null)
        notesObj = [];

    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    addTxt.value="";
    localStorage.setItem("notes", JSON.stringify(notesObj));
    console.log(notesObj)
    shownotes();
})

function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
                    <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1} </h5>
                        <p class="card-text"> ${element}</p>
                        <button class="btn btn-primary" id = "${index}" onclick = "deletion(this.id)">Delete Note</button>
                    </div>
                    </div>
        `
    });

    let merger = document.getElementById("notes");

    if (notesObj.length != 0)
        merger.innerHTML = html;
    else {
        merger.innerHTML = "Add you notes here";
    }
}

function deletion(index){
    let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  shownotes();
}
