"use strict";

const schemaBtn = document.getElementById("schema");
const zekeringbtn = document.getElementById("zekeringkast");
const blur = document.getElementById("schemaBlur");


function showSchema() {

blur.classList.toggle("noShow");

}

schemaBtn.addEventListener("click", showSchema());