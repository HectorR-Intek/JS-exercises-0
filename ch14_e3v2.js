//Chapter 14, exercise 3.
"use strict";

let cachedData = null;

const saved = localStorage.getItem("activeTemplate") || "template1";
showTemplate(saved);



function fetchData() {
  if (cachedData) return Promise.resolve(cachedData);
  return fetch("data.json")
    .then(res => res.json())
    .then(data => {
      cachedData = data;
      return data;
    });
}

function showTemplate(templateId) {
  const container = document.getElementById("contentContainer");
  container.innerHTML = "";
  const template = document.getElementById(templateId);
  const clone = template.content.cloneNode(true);
  container.appendChild(clone);

  localStorage.setItem("activeTemplate", templateId);

  fetchData().then(data => {
    if (templateId === "template1") {
      populateTemplate1(data);
    } else if (templateId === "template2") {
      populateTemplate2(data);
    }
  });

  if (templateId === "template1") {
    const imagesColumn = document.querySelector(".images-column");
    imagesColumn.addEventListener("click", () => showTemplate("template2"));
  }
}

function populateTemplate1(data) {
  const imagesColumn = document.querySelector(".images-column");
  const textColumn = document.querySelector(".text-column");

  imagesColumn.innerHTML = "";
  data.template1.images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("image");
    imagesColumn.appendChild(img);
  });

  textColumn.innerHTML = "";
  data.template1.paragraphs.forEach(p => {
    const para = document.createElement("p");
    para.textContent = p;
    textColumn.appendChild(para);
  });
}

function populateTemplate2(data) {
  const container = document.querySelector(".container2");

  const img = container.querySelector("img");
  const h3 = container.querySelector("h3");
  const p = container.querySelector("p");

  img.src = data.template2.image;
  h3.textContent = data.template2.title;
  p.textContent = data.template2.text;
}
