import React from "react";
import "./querystyle.css";
import { useState } from "react";
import Accordion from "./Accordtion";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API_KEY = "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";
const systemMessage = {
    role: "system",
    content:
        "Explain things like you're talking to a software professional with 2 years of experience.",
};
function Query() {
    const [messages, setMessages] = useState([
        {
            message: "Hello, welcome To WANDER_ELLA. Ask me anything!",
            sentTime: "just now",
            sender: "WANDER_ELLA",
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);

    const handleSend = async (message) => {
        const newMessage = {
            message,
            direction: "outgoing",
            sender: "user",
        };

        const newMessages = [...messages, newMessage];
          console.log("newMessages");
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
            return { role: role, content: messageObject.message };
        });

        const apiRequestBody = {
            model: "gpt-3.5-turbo",
            messages: [systemMessage, ...apiMessages],
        };

        await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + API_KEY,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(apiRequestBody),
        })
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                console.log(data);
                setMessages([
                    ...chatMessages,
                    {
                        message: data.choices[0].message.content,
                        sender: "ChatGPT",
                    },
                ]);
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
                            <div className="Appi">
                                <div
                                    style={{
                                        position: "relative",
                                        height: "550px",
                                        width: "600px",
                                        marginLeft: "100px",
                                        padding: "2PX",
                                    }}
                                >
                                    <MainContainer>
                                        <ChatContainer>
                                            <MessageList
                                                scrollBehavior="smooth"
                                                typingIndicator={
                                                    isTyping ? (
                                                        <TypingIndicator content="WANDER_ELLA is typing" />
                                                    ) : null
                                                }
                                            >
                                                {messages.map((message, i) => {
                                                    console.log(message);
                                                    return (
                                                        <Message
                                                            key={i}
                                                            model={message}
                                                        />
                                                    );
                                                })}
                                            </MessageList>
                                            <MessageInput
                                                placeholder="Type your message here"
                                                onSend={(message) =>
                                                    handleSend(message)
                                                }
                                            />
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
                                    title="Is solo travel safe for women?"
                                    content="Yes, solo travel can be safe for women if certain precautions are taken. It's essential to research your destination, stay aware of your surroundings, trust your instincts, and follow local customs and guidelines. Our destination guides provide specific safety tips and trusted residences for female travelers."
                                />
                                <Accordion
                                    title="How do I choose a safe and female-friendly accommodation?"
                                    content="When selecting accommodations, consider factors such as location, reviews from other female travelers, security measures, and the presence of female staff. Look for accommodations that prioritize the safety and comfort of solo female travelers. Our website provides a review and rating system to help you find female-friendly establishments."
                                />
                                <Accordion
                                    title="How can I stay safe while using public transportation in unfamiliar places?"
                                    content="When using public transportation, be aware of your surroundings, secure your belongings, and avoid traveling late at night if possible. Research the local transportation system in advance and consider using reputable taxi services or ridesharing apps. Our destination guides provide specific tips for using public transportation safely."
                                />
                                <Accordion
                                    title="What should I do in case of emergencies or unexpected situations?"
                                    content="It's important to have a plan in case of emergencies. Familiarize yourself with emergency contacts for your destination (We have this covered in Helpline), including local authorities and your state embassy or consulate. Share your travel itinerary with a trusted contact back home and consider purchasing travel insurance for added security."
                                />
                                <Accordion
                                    title="How do I handle language barriers while traveling alone?"
                                    content="Learn some basic phrases in the local language, carrying a translation app or pocket dictionary, and using non-verbal communication can help in simple interactions. Additionally, seeking assistance from hotel staff or local tourism offices can be useful."
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
