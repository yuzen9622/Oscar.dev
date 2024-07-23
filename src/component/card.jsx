import React from "react";

function Card({
  No,
  title,
  url = "",
  picUrl = "",
  content,
  lang = "",
  sorceUrl = "",
}) {
  return (
    <section
      className="card hiddenX"
      style={{ transitionDelay: `.${No + 1}s` }}
    >
      <a href={url} target="_blank" rel="noreferrer" className="card-main">
        <div className="card-p">
          Try
          <p>
            <a
              href={sorceUrl}
              style={{ color: "var(--sky-blue)" }}
              target="_blank"
              rel="noreferrer"
            >
              source code
            </a>
          </p>
        </div>
        <div className="card-title">
          <h3>{title}</h3>
          <p>{content}</p>
          <p>langauge:{lang}</p>
        </div>
        <img src={picUrl} alt="" />
      </a>
    </section>
  );
}

export default Card;
