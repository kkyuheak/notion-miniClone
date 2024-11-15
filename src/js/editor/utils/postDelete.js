import { request } from "../../api/api.js";
import { navigate } from "../../spa/spa.js";

export const deletePost = (postId) => {
  const deleteBtn = document.querySelector(".deleteBtn");
  const deleteEvent = async (e) => {
    console.log("click");
    e.preventDefault();
    try {
      const result = confirm("정말로 삭제하시겠습니까?");
      console.log(result);
      await request({ method: "DELETE" }, postId);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  deleteBtn.addEventListener("click", deleteEvent);
};
