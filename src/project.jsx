import React from "react";
import Card from "./component/card";
import { useEffect } from "react";

function Project() {
  useEffect(() => {
    document.title = "Projects";
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && document.body.offsetTop > 0) {
          entry.target.classList.remove("show");
        } else {
          entry.target.classList.add("show");
        }
      });
    });
    let hiddenEl = document.querySelectorAll(".hiddenX,.hiddenY");
    hiddenEl.forEach((el) => {
      observer.observe(el);
    });
  }, []);
  let projects = [
    {
      title: "Wether App",
      url: "https://yuzen9622.github.io/weather-app/",
      sorceUrl: "https://github.com/yuzen9622/weather-app",
      lang: ["HTML", "CSS", "JS", "React"],
      content:
        "歡迎來到我們的台灣天氣網站，這是一個專為台灣地區設計的天氣資訊平台，致力於為您提供最準確及時的天氣預報。透過我們的網站，您可以輕鬆查詢台灣各地的即時天氣狀況，包括溫度、濕度、風速、降雨量等詳細資訊。我們不僅提供當前天氣預報，還有未來七天的天氣預測，幫助您提前安排日常生活和出行計劃。無論您是在台北、高雄、台中還是花蓮，我們都能為您提供精確的天氣資訊。",

      picUrl: require("./media/wetherapp.png"),
    },
    {
      title: "Account-App",
      lang: ["HTML", "CSS", "JS", "React", "PHP"],
      url: "https://yuzen9622.github.io/Account-App/#/",
      content:
        "歡迎來到我們的記帳網站，這是一個專為現代人設計的財務管理工具，旨在幫助您輕鬆地追蹤和管理個人或家庭的財務狀況。透過我們簡單易用的介面，您可以快速上手，不需要任何專業知識即可輕鬆操作。我們的網站提供多樣化的記帳分類，無論是日常開銷、收入、投資還是儲蓄，都能輕鬆記錄並管理。此外，我們還提供圖表和報表功能，讓您能夠直觀地了解自己的財務狀況，進而做出更明智的財務決策。",
      sorceUrl: "https://github.com/yuzen9622/Account-App",
      picUrl: require("./media/account.png"),
    },
    {
      title: "Tic Tac Toe",
      lang: ["HTML", "CSS", "JS", "React", "Node.js", "Java"],
      url: "https://yuzen9622.github.io/Tic-tac-toe/",
      sorceUrl: "https://github.com/yuzen9622/Tic-tac-toe",
      content:
        "歡迎來到我們的圈圈叉叉（井字遊戲）網站，這是一個專為休閒娛樂設計的在線遊戲平台，讓您隨時隨地享受經典的井字遊戲樂趣。我們的網站提供簡單易用的遊戲介面，無論您是新手還是高手，都能迅速上手。遊戲的規則簡單明了，兩名玩家輪流在 3x3 的棋盤上放置自己的標記（圈圈或叉叉），誰先在水平、垂直或對角線上連成一排，即可獲勝。這是一款考驗策略和思維的經典遊戲，適合各個年齡層的玩家。",
      picUrl: require("./media/tictactoe.png"),
    },
    {
      title: "Chat App",
      lang: ["HTML", "CSS", "JS", "React", "Node.js"],
      url: "https://yuzen9622.github.io/Chat-App/#/chat",
      content:
        "歡迎來到我們的聊天網站，這是一個專為交流和社交設計的平台，讓您隨時隨地與朋友、家人或新認識的人互動，享受便捷的線上溝通體驗。我們的網站提供多種聊天功能，無論是文字聊天、語音通話還是視頻通話，都能輕鬆實現網站介面簡潔直觀，操作簡單，即使是第一次使用也能迅速上手。在我們的聊天網站上，您還可以使用多種表情符號和貼圖，讓您的對話更加生動有趣。我們還提供文件傳輸功能，方便您與對方分享照片、影片和其他檔案。",
      sorceUrl: "https://github.com/yuzen9622/Chat-App",
      picUrl: require("./media/chatapp.png"),
    },
    {
      title: "網頁形成介紹",
      lang: ["HTML", "CSS", "JS"],
      content:
        "歡迎來到我們的網頁組成介紹網站，這是一個專門為網頁設計初學者和愛好者打造的學習平台，幫助您深入了解網頁的基本結構和組成要素，輕鬆入門網頁開發。在我們的網站上，您將學習到網頁的核心組成部分，包括 HTML、CSS 和 JavaScript。通過詳細的教學內容和實例演示，我們將逐步帶領您掌握這些基礎技術，幫助您從零開始建立自己的網頁。",
      sorceUrl: "https://github.com/yuzen9622/web3",
      url: "https://yuzen9622.github.io/web3/",
      picUrl: require("./media/web3.png"),
    },
    {
      title: "CloudShare",
      lang: ["HTML", "CSS", "JS", "PHP"],
      content:
        "這個雲端共享專案旨在提供一個簡單且便捷的文件共享平台。使用者可以快速上傳文件並生成共享鏈接，透過此鏈接他人可直接下載文件。目標是讓使用者能夠隨時隨地通過不同設備輕鬆共享文件。",
      sorceUrl: "https://github.com/yuzen9622/shareCloud",
      url: "https://yuzen.lovestoblog.com/frontend/",
      picUrl: require("./media/cloudshare.png"),
    },
  ];
  return (
    <div className="main">
      <div className="main-title">
        <h1>My Projects</h1>
      </div>
      <div className="main-container">
        {projects?.map((project, index) => (
          <Card
            key={index}
            No={index + 1}
            title={project.title}
            url={project.url}
            content={project.content}
            lang={project.lang}
            sorceUrl={project.sorceUrl}
            picUrl={project.picUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
