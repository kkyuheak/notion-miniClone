import { request } from "../api/api.js";
import { navigate } from "../spa/spa.js";
import { Sidebar } from "./components/Sidebar.js";

export const newSidePost = async () => {
  const upperPost = {
    title: "제목 없음",
    parent: null,
  };

  const data = await request({
    method: "Post",
    body: JSON.stringify(upperPost),
  });

  const documentList = document.querySelector(".documentList");
  const newLi = document.createElement("li");
  newLi.classList.add("documentItem");

  newLi.innerHTML = `
        <div class="rotateAndPage">
          <button class="rotateButton">
            <img src="/assets/right_arrow.svg" />
          </button>
          <a href="/documents/${data.id}" class="documentTitle">${data.title}</a>
          <div class="documentButton">
            <button class="addButton"><img src="/assets/add.svg" /></button>
            <button class="removeButton">
              <img src="/assets/remove.png" />
            </button>
          </div>
        </div>
      `;

  documentList.appendChild(newLi);

  navigate(`/documents/${data.id}`);
  console.log("New Document", data);
};
