"use strict";
let copyBtn = document.querySelector("#titleCopyBtn");

copyBtn.addEventListener("click", event => {
    let copiedContent = document.querySelector("#title");
    let range = document.createRange();
    range.selectNode(copiedContent);
    window.getSelection().addRange(range);
    try {
        let success = document.execCommand("copy");
        let msg = success ? "SUCESS COPIED!!" : "FAILED OOPS..!";
        console.log(msg);
    } catch(err) {
        console.error(err);
    }
    window.getSelection().removeAllRanges();
})

let cpToClip = document.querySelector("#anotherCopyBtn");
cpToClip.addEventListener("click", event => {
    let copiedContent = document.querySelector("#textContents");
    copiedContent.select();
    try{
        let success = document.execCommand("copy");
        let msg = success ? "success copy contents" : "failed......!";
        console.log(msg);
    } catch(err) {
        console.error(err);
    }
})