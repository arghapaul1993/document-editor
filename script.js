const boldBtn = document.getElementById("bold");
const italicBtn = document.getElementById("italic");
const underlineBtn = document.getElementById("underline");
const alignLeftBtn = document.getElementById("align-left");
const alignCenterBtn = document.getElementById("align-center");
const alignRightBtn = document.getElementById("align-right");
const fontColorBtn = document.getElementById("font-color");
const highlightColorBtn = document.getElementById("highlight-color");
const undoBtn = document.getElementById("undo");
const redoBtn = document.getElementById("redo");
const saveBtn = document.getElementById("save");
const content = document.querySelector(".content");
const fontSelect = document.querySelector("#font-size");
const fontFamily = document.querySelector("#font-family");
const printdata = document.querySelector(".Printbtn");
const editore = document.querySelector(".editor");
// Text formatting functions
function bold() {
  document.execCommand("bold", false, null);
}

function italic() {
  document.execCommand("italic", false, null);
}

function underline() {
  document.execCommand("underline", false, null);
}

function changeFont() {
    var text = fontSelect.options[fontSelect.selectedIndex].text;
  document.execCommand("fontName", false, text);
}

function changeSize() {
  var size = fontSelect.options[fontSelect.selectedIndex].text;
  document.execCommand("fontSize", false, size);
}

// Undo/Redo functions
function undo() {
  document.execCommand("undo", false, null);
}

function redo() {
  document.execCommand("redo", false, null);
}

// Color picker function
function changeColor() {
  const color = colorPicker.value;
  document.execCommand("foreColor", false, color);
}

// Save function
function saveContent() {
    
  const contentHTML = content.innerHTML;
  localStorage.setItem("savedContent", contentHTML);
}

// Load saved content
if (localStorage.getItem("savedContent")) {
  content.innerHTML = localStorage.getItem("savedContent");
}

function printContentsin() {
    var printContents = document.querySelector(".content").innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}

    function newpageap(){
        $(content).each(function(index,data){
            const h = data.offsetHeight
            console.log(index)
            console.log(h)
        if(h === 1500){
            
            
        }else{
            const div = document.createElement("DIV");
            div.className = "content";
            div.contentEditable = true;
            editore.append(div)
            div.focus = true;
        }
        })
    }


// Event listeners
boldBtn.addEventListener("click", bold); //font bold
italicBtn.addEventListener("click", italic); //font italic
underlineBtn.addEventListener("click", underline); // font underline
fontFamily.addEventListener("change", changeFont); // font style
fontSelect.addEventListener("change", changeSize); // font size
undoBtn.addEventListener("click", undo); //undo
redoBtn.addEventListener("click", redo); //redo
fontColorBtn.addEventListener("change", changeColor); //change color
saveBtn.addEventListener("click", saveContent); // save content
printdata.addEventListener("click", printContentsin); // save content
content.addEventListener("input", newpageap); // save content


window.onbeforeprint = function() {
    // Add custom header and footer to printed page
    document.getElementById("header").innerHTML = "<h1>Page Header</h1>";
    document.getElementById("footer").innerHTML = "<p>Page Footer</p>";
  };
  


