import { request } from "../../api/api.js";
import { navigate } from "../../spa/spa.js";
import { newSidePost } from "../newSidePost.js";
import { sideNewBtn } from "../utils/sideNewBtn.js";

export const Sidebar = async () => {
  let html = `
    <aside>
      <div class="upperSidebar">
        <img src="/assets/profile.svg" alt="프로필이미지" />
        <span class="isix">ISIX</span>
        <button class="closeSidebarButton">
          <img src="/assets/double_left.svg" alt="닫기" />
        </button>
      </div>

      <!-- 여기에 spa.js를 통해 링크 추가 -->
      <ul class="documentList"></ul>

      <!-- 새 페이지 버튼 -->
      <div class="bottomSidebar">
        <button class="newDocumentButton">
          <img src="/assets/add.svg" /> 
          <p class="new__title">새 페이지</p>
        </button>
      </div>
    </aside>
  `;

  const getAppEl = document.getElementById("app");

  getAppEl.innerHTML = html;

  const getDocuments = await request();

  // 리스트 ul태그
  const documentList = document.querySelector(".documentList");

  getDocuments.forEach((doc) => {
    const newLi = document.createElement("li");
    newLi.classList.add("documentItem");

    newLi.innerHTML = `
        <div class="rotateAndPage">
          <button class="rotateButton">
            <img src="/assets/right_arrow.svg" />
          </button>
          <a href="/documents/${doc.id}" class="documentTitle">${doc.title}</a>
          <div class="documentButton">
            <button class="addButton"><img src="/assets/add.svg" /></button>
            <button class="removeButton">
              <img src="/assets/remove.png" />
            </button>
          </div>
        </div>
      `;

    documentList.appendChild(newLi);
    const titleLink = newLi.querySelector(".documentTitle");
    titleLink.addEventListener("click", (event) => {
      event.preventDefault(); // 기본 링크 동작 막기
      navigate(`/documents/${doc.id}`);
    });
  });

  const bottomNewButton = document.querySelector(".newDocumentButton");
  bottomNewButton.addEventListener("click", newSidePost);

  const sidebar = document.querySelector("aside");
  const closeSidebarButton = document.querySelector(".closeSidebarButton");
  const openSidebarButton = document.querySelector(".openSidebarButton");

  // 사이드바 닫기
  closeSidebarButton.addEventListener("click", () => {
    sidebar.classList.add("closed"); // 사이드바 닫기
    openSidebarButton.classList.remove("hidden"); // 햄버거 버튼 보이기
  });

  // 사이드바 열기
  openSidebarButton.addEventListener("click", () => {
    sidebar.classList.remove("closed"); // 사이드바 열기
    openSidebarButton.classList.add("hidden"); // 햄버거 버튼 숨기기
  });

  // 아코디언 토글 상태
  const toggleButtons = document.querySelectorAll(".rotateButton");
  console.log(toggleButtons);
  toggleButtons.forEach((toggleButton) => {
    toggleButton.addEventListener("click", () => {
      console.log("a");
      toggleButton.classList.toggle("rotate");
    });
  });

  sideNewBtn();
};
