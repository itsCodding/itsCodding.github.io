const key = 12;

function changeTxt(){
    document.getElementById("txt").value=getTxt("rslt");
    document.getElementById("rslt").value=null;
}

function getTxt(id){
   return document.getElementById(id).value;
}

function getRslt(txt, type){
    let rslt="";
    for(let i = 0; i<txt.length;i++){
        let code = txt.charCodeAt(i)+key*type;
        rslt += String.fromCharCode(code);
    }
    return rslt;
}

function crypt(){
    let rslt = document.getElementById("rslt");
    rslt.value = getRslt(getTxt("txt"),1);
}
function decrypt(){
    let rslt = document.getElementById("rslt");
    rslt.value = getRslt(getTxt("txt"),-1);
}

function clearTxt(){
    document.getElementById("txt").value="";
}
function copyResult() {
    const resultTextarea = document.getElementById("rslt");
    resultTextarea.select(); // Виділити вміст textarea
    document.execCommand("copy"); // Скопіювати виділений текст у буфер обміну
     // Зняти виділення після копіювання
    window.getSelection().removeAllRanges();
}
  
// ---------------------------
function autoResizeTextArea() {
    const textarea = document.getElementById("txt");
    textarea.style.height = "auto"; // Спочатку встановлюємо автоматичну висоту
    textarea.style.height = textarea.scrollHeight + "px"; // Змінюємо висоту на висоту контенту
  }