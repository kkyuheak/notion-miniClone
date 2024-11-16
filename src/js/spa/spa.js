import { posts } from "../editor/components/Posts.js";
import { Sidebar } from "../sidebar/components/Sidebar.js";

// 클릭하면 해당 고유 ID에 따라 해당 URL로 이동
export function navigate(path) {
  window.history.pushState({}, "", window.location.origin + path);
  router();
}

// 라우터
export function router() {
  const path = window.location.pathname;

  // 메인화면 라우터
  if (path === "/") {
    const reset = document.querySelector("main");
    reset.innerHTML = "";
    Sidebar();
  }

  // document 라우터 -> 상세 loadContent
  else if (path.startsWith("/documents/")) {
    const documentId = path.split("/")[2];
    posts(documentId);
  } else if (path === "/index.html") {
    window.history.replaceState({}, "", "/");
    // loadTitles();
    Sidebar();
  }

  // 오류 라우터 -> 오류처리
  else {
    alert("경로를 찾을 수 없습니다.");
  }
}

// 앞으로 가기/뒤로 가기

window.addEventListener("load", router);
window.addEventListener("popstate", router);
