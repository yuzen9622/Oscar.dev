import React, { useState, useEffect } from "react";
import Form from "./component/form";

function Content() {
  const [data, setData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState(null);
  useEffect(() => {
    document.title = "Content Me";
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
  useEffect(() => {
    if (data.email !== "") {
      setError(null);
    }
  }, [data]);
  const submitFunc = async () => {
    if (data.email === "") {
      setError("Email is required");
      return;
    }
    let regex =
      /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(data.email)) {
      setError("Not vaild email");
      return;
    }
    const response = await fetch(
      "https://mail-server-vjjz.onrender.com/email/content/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          toMail: data.email,
          phone: data.phone,
          firstName: data.firstName,
          secondName: data.secondName,
          message: data.message,
        }),
      }
    );
    if (response.ok) {
      setData({
        firstName: "",
        secondName: "",
        email: "",
        phone: "",
        message: "",
      });
      console.log(response.json());
    }
  };

  return (
    <div className="content">
      <h1>Content Me</h1>
      <div className="content-container hiddenY ">
        <Form
          type={"text"}
          onChange={(e) => {
            setData({ ...data, firstName: e.target.value });
          }}
          value={data.firstName}
          label={"First Name"}
        />
        <Form
          type={"text"}
          onChange={(e) => {
            setData({ ...data, secondName: e.target.value });
          }}
          value={data.secondName}
          label={"Second Name"}
        />
      </div>
      <div
        className="content-container hiddenY"
        style={{ transitionDelay: ".1s" }}
      >
        <Form
          type={"text"}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
          value={data.email}
          label={"Email"}
          important="true"
          errorText={error}
        />
        <Form
          type={"text"}
          onChange={(e) => {
            setData({ ...data, phone: e.target.value });
          }}
          value={data.phone}
          label={"Phone"}
        />
      </div>
      <div
        className="content-container hiddenY"
        style={{ transitionDelay: ".2s" }}
      >
        <div className="form">
          <textarea
            className=""
            name=""
            onChange={(e) => setData({ ...data, message: e.target.value })}
            id="msg"
            value={data.message}
          ></textarea>
          <label htmlFor="msg">Write Some Message</label>
        </div>
      </div>
      <button onClick={submitFunc}>Submit</button>
    </div>
  );
}

export default Content;
