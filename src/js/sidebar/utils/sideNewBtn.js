import { request } from "../../api/api.js";
import { navigate } from "../../spa/spa.js";

export const sideNewBtn = async () => {
  const getAllPlusBtns = document.querySelectorAll(".addButton");

  getAllPlusBtns.forEach((plusbtn) => {
    plusbtn.addEventListener("click", async (e) => {
      // 새 글 요청

      // 부모 El
      const parent = plusbtn.parentElement.previousElementSibling;
      // 부모 id
      const parentId = Number(parent.getAttribute("href").split("/")[2]);

      const newChildPost = {
        title: "제목 없음",
        parent: parentId,
      };

      const data = await request({
        method: "POST",
        body: JSON.stringify(newChildPost),
      });

      // sidebar 자식 리스트
      const childElement = document.createElement("li");
      childElement.className = "documentItem";
      childElement.setAttribute("data-id", data.id);
      childElement.innerHTML = `
        <div class="rotateAndPage">
          <button class="rotateButton">
            <img src="/assets/right_arrow.svg" />
          </button>
          <a class="documentTitle" href="/documents/${data.id}">${data.title}</a>
        <div class="documentButton">
          <button class="addButton"><img src="/assets/add.svg" /></button>
          <button class="removeButton">
            <img src="/assets/remove.png" />
          </button>
          </div>
        </div>
      `;
      childElement.style.marginLeft = "15px";

      // 새로 생성한 리스트 추가
      const parentList = parent.parentElement.parentElement;
      parentList.appendChild(childElement);

      // 생성 후 이동
      navigate(`/documents/${data.id}`);
    });
  });
};
