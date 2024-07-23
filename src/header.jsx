import React, { useEffect } from "react";
import myself from "./media/image.jpeg";
import Circle from "./component/circle";
export default function Header() {
  useEffect(() => {
    document.title = "Oscar.dev";
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
    let hiddenEl = document.querySelectorAll(".hiddenX,.hiddenY");
    hiddenEl.forEach((el) => {
      observer.observe(el);
    });
  }, []);
  return (
    <div className="header">
      <div className="about">
        <div className="about-main">
          <div className="about-main-img ">
            <h1 className="hiddenY">About Me</h1>
            <img className="hiddenY" src={myself} alt="myself" />
            <div className="share hiddenY">
              <a
                href="https://www.instagram.com/zn._622/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/oscartsao.oscartsao/?locale=zh_TW"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://github.com/yuzen9622/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
          </div>

          <div className="about-skill ">
            <div className="skill-about hiddenY">
              <h2 className="skill-title">Oscar曹宇鎮</h2>
              <p>
                大家好，我是曹宇鎮，來自新竹，目前就讀國立台中科技大學五專部三年級。我熱愛寫程式和網頁設計，現在學習的程式語言有HTML、CSS、JavaScript、C和C++。閒暇時，我喜歡健身和打遊戲，這些活動幫助我保持身心健康。除此之外，我正在準備APCS考試，期望在這方面能夠取得好成績。如果你對程式設計有興趣，或是有任何相關問題，歡迎隨時找我討論和研究。期待能夠和大家一起進步！
              </p>
            </div>
            <div
              className="skill-about hiddenY"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Circle
                text={"Projects"}
                color={"rgb(238, 163, 2)"}
                route={"/projects"}
              />
              <Circle
                text={"Content"}
                color={"rgb(255, 0, 0)"}
                route={"/content"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
