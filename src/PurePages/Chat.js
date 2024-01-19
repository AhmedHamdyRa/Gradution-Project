import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import axiosArabic from "axios";
import "./Chat.css";
import Header from "../UseRef/Header";



const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [language, setLanguage] = useState("english");
  const messageContainerRef = useRef(null); 

    const toggleLanguage = () => {
      setLanguage((prevLanguage) => (prevLanguage === 'english' ? 'arabic' : 'english'));
    };
      
  useEffect(() => {
    scrollToLatestMessage();
  }, [messages]);

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const addMsgHandler = async (event) => {
    event.preventDefault();
    const msgData = inputValue;
    setInputValue("");

    if (inputValue === "") {
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        pos: "right",
        content: msgData,
      },
    ]);

    let response;

    if (language === "english") {
      response = await axios.post(
        "http://164.92.67.71:5005/webhooks/rest/webhook",
        {
          sender: "react-app",
          message: msgData,
        },
        {
          headers: {},
        }
      );
    } else if (language === "arabic") {
      response = await axiosArabic.post(
        "http://143.110.239.125:5005/webhooks/rest/webhook",
        {
          sender: "react-app",
          message: msgData,
        },
        {
          headers: {},
        }
      );
    }

    console.log(response);
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        pos: "left",
        content: response.data,
      },
    ]);
  };

  const scrollToLatestMessage = () => {
  if (messageContainerRef.current && messageContainerRef.current.lastElementChild) {
    const container = messageContainerRef.current;
    const latestMessage = container.lastElementChild;
    latestMessage.scrollIntoView({ behavior: "smooth" });
  }
};


  return (
    <div className="Chattt">
    <Header />
      <div className="page">
      <div className="toggle-container">
      <label className="toggle-label">
        <span className={`toggle-text toggle-text-left ${language === 'arabic' ? 'checked' : '' }`}>
          AR
        </span>
        <input
          type="checkbox"
          className="toggle-checkbox"
          checked={language === 'arabic'}
          onChange={toggleLanguage}
        />
        <span className="toggle-slider"></span>
        <span className={`toggle-text toggle-text-right ${language === 'english' ? 'checked' : ''}`}>
          EN
        </span>
      </label>
      </div>

<br/><br/>
        <div className="messages-cont" ref={messageContainerRef}>
        <div className="toggle-container">
          <label className="toggle-label">
            <span className={`toggle-text toggle-text-left ${language === 'arabic' ? 'checked' : '' }`}>
              AR
            </span>
            <input
              type="checkbox"
              className="toggle-checkbox"
              checked={language === 'arabic'}
              onChange={toggleLanguage}
            />
            <span className="toggle-slider"></span>
            <span className={`toggle-text toggle-text-right ${language === 'english' ? 'checked' : ''}`}>
              EN
            </span>
          </label>
        </div>
          {messages.map((msg) => {
            return (
              <div className={`message-${msg.pos}-cont`} key={msg.id}>
                {msg.pos === "left" ? (
                  msg.content.map((msg) => {
                    return (
                      <div className={`message message-left`} key={msg.id}>
                        {msg.text}
                      </div>
                    );
                  })
                ) : (
                  <div className={`message message-${msg.pos}`} key={msg.id}>
                    {msg.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <form className="controller-cont" onSubmit={addMsgHandler}>
          <input
            className="input"
            placeholder="Type your message here..."
            onChange={inputHandler}
            value={inputValue}
          />
          {/* <button className="btnn" type="submit">
            Send
          </button> */}
          <button class="btnnnn" type="submit">
          <div class="wrapper">
              <p class="text123">Send </p>

              <div class="flower flower1">
                  <div class="petal one"></div>
                  <div class="petal two"></div>
                  <div class="petal three"></div>
                  <div class="petal four"></div>
              </div>
              <div class="flower flower2">
                  <div class="petal one"></div>
                  <div class="petal two"></div>
                  <div class="petal three"></div>
                  <div class="petal four"></div>
              </div>
              <div class="flower flower3">
                  <div class="petal one"></div>
                  <div class="petal two"></div>
                  <div class="petal three"></div>
                  <div class="petal four"></div>
              </div>
              <div class="flower flower4">
                  <div class="petal one"></div>
                  <div class="petal two"></div>
                  <div class="petal three"></div>
                  <div class="petal four"></div>
              </div>
              <div class="flower flower5">
                  <div class="petal one"></div>
                  <div class="petal two"></div>
                  <div class="petal three"></div>
                  <div class="petal four"></div>
              </div>
              <div class="flower flower6">
                  <div class="petal one"></div>
                  <div class="petal two"></div>
                  <div class="petal three"></div>
                  <div class="petal four"></div>
              </div>
          </div>
  </button>
        </form>
        
        <br />
        .
        <br />
        
      </div>
      
    </div>
  );
};

export default Chat;
