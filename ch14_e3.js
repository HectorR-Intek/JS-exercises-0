// Chapter 14, exercise 3
"use strict";

const state = {
  articles: []
};

init();

async function init() {
  await loadData();
  window.addEventListener("hashchange", route);
  if (location.hash) {
    route();
  } else {
    navigateTo("template1");
  }
}

async function loadData() {
  if (state.articles.length) return;
  const res = await fetch("articles.json");
  state.articles = await res.json();
}

function navigateTo(templateId, id = null) {
  const nextHash = templateId === "template1"
    ? "#/"
    : (id != null ? `#/article/${id}` : "#/article");

  if (location.hash !== nextHash) {
    location.hash = nextHash;
  } else {
    route();
  }
}

function route() {
  const hash = location.hash.replace(/^#/, "");
  const parts = hash.split("/").filter(Boolean);

  let templateId = "template1";
  let id = null;

  if (parts.length === 0 || parts[0] === "template1") {
    templateId = "template1";
  } else if (parts[0] === "article" || parts[0] === "template2") {
    templateId = "template2";
    id = parts[1] ? Number(parts[1]) : null;
    if (Number.isNaN(id)) id = null;
  } else {
    templateId = "template1";
  }

  showTemplate(templateId, id);
}

function showTemplate(templateId, articleId = null) {
  const container = document.getElementById("contentContainer");
  container.replaceChildren();

  const tpl = document.getElementById(templateId);
  const node = tpl.content.cloneNode(true);
  container.appendChild(node);

  if (templateId === "template1") {
    renderList(container);
  } else if (templateId === "template2") {
    const id = articleId ?? (state.articles[0] && state.articles[0].id);
    if (id != null) renderDetail(container, id);
  }
}

function renderList(root) {
  const list = root.querySelector(".article-list");
  if (!list) return;

  const cardTpl = document.getElementById("article-card");
  const frag = document.createDocumentFragment();

  state.articles.forEach((article) => {
    const li = cardTpl.content.firstElementChild.cloneNode(true);

    const img = li.querySelector(".article-thumb");
    const title = li.querySelector(".article-title");
    const snippet = li.querySelector(".article-snippet");

    img.src = article.image;
    img.alt = article.title;
    title.textContent = article.title;
    snippet.textContent = article.snippet;

    li.addEventListener("click", () => {
      navigateTo("template2", article.id);
    });

    frag.appendChild(li);
  });

  list.appendChild(frag);
}

function renderDetail(root, id) {
  const article = state.articles.find((a) => a.id === id) || state.articles[0];
  if (!article) return;

  const img = root.querySelector(".article-image");
  const title = root.querySelector(".article-title");
  const body = root.querySelector(".article-body");

  if (img) { img.src = article.image; img.alt = article.title; }
  if (title) { title.textContent = article.title; }
  if (body) { body.textContent = article.body; }
}
