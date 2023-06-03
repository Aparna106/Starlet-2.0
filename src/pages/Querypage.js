import React from "react";
import "./querystyle.css";
import { useState } from 'react';
import Accordion from "./Accordtion";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "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";
const systemMessage = { 
  "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
}
function Query() {
    const [messages, setMessages] = useState([
        {
          message: "Hello, Welcome To WANDER_ELLA Ask me anything!",
          sentTime: "just now",
          sender: "WANDER_ELLA"
        }
      ]);
      const [isTyping, setIsTyping] = useState(false);
    
      const handleSend = async (message) => {
        const newMessage = {
          message,
          direction: 'outgoing',
          sender: "user"
        };
    
        const newMessages = [...messages, newMessage];
        
        setMessages(newMessages);
    
        setIsTyping(true);
        await processMessageToChatGPT(newMessages);
      };
    
      async function processMessageToChatGPT(chatMessages) { 
    
        let apiMessages = chatMessages.map((messageObject) => {
          let role = "";
          if (messageObject.sender === "ChatGPT") {
            role = "assistant";
          } else {
            role = "user";
          }
          return { role: role, content: messageObject.message}
        });
    
        const apiRequestBody = {
          "model": "gpt-3.5-turbo",
          "messages": [
            systemMessage, 
            ...apiMessages 
          ]
        }
    
        await fetch("https://api.openai.com/v1/chat/completions", 
        {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + API_KEY,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(apiRequestBody)
        }).then((data) => {
          return data.json();
        }).then((data) => {
          console.log(data);
          setMessages([...chatMessages, {
            message: data.choices[0].message.content,
            sender: "ChatGPT"
          }]);
          setIsTyping(false);
        });
      }
    

  return (
    <div className="queryPage">
      
      <div className="chatBot">
      <div
        className="page-section"
        xyz="fade small stagger delay-4 ease-in-out"
>
        <div className="section-lefts" xyz="fade left stagger">
          <div className="section-items xyz-nested">
          <div className='Appi'>
	<div style={{ position:"relative", height: "550px", width: "600px" ,marginLeft:"100px",padding:"2PX" }}>
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator  content="WANDER_ELLA is typing" /> : null}
            >
              {messages.map((message, i) => {
                console.log(message)
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={(message) => handleSend(message)} />    
          </ChatContainer>
        </MainContainer>
      </div>
	</div>
    </div>
          </div>
          </div>
      </div>
      <div
        className="page-section"
        xyz="fade small stagger delay-4 ease-in-out"
>
        <div className="section-lefts" xyz="fade right stagger">
          <div className="section-items xyz-nested">
          <div className="faq">
      
      
      <div className="accdata">
      <Accordion
        title="question 1"
        content=" answer 1"
      />
      <Accordion
        title=" question 2"
        content=" answer 2  "
      /> 
      <Accordion
        title="  question 3"
        content="  answer 3  "
      />
      <Accordion
        title=" question 4"
        content=" answer 4"
      />
</div>
            </div>
            </div>
          </div>
      
</div>


        
     
    </div>
  );
}

export default Query;
