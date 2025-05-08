// Toggle Chatbox
const toggle = document.getElementById("chat-toggle");
const chatbox = document.getElementById("chatbox");

toggle.addEventListener("click", () => {
  chatbox.style.display = chatbox.style.display === "flex" ? "none" : "flex";
});

// Chat Logic
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatMessages = document.getElementById("chat-messages");

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const input = userInput.value.trim();
  if (!input) return;

  displayMessage(input, "user");
  userInput.value = "";

  fetchBotResponse(input);
}

function displayMessage(message, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender);
  msgDiv.innerText = `${message}`;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function fetchBotResponse(prompt) {
  const apiKey = "AIzaSyBVz1bOv7N14acM82qUkswEXgzxdh_6ulA"; // 🔑 Replace with your real Gemini API key
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + apiKey;

  const requestData = {
    contents: [{
      parts: [{ text: `Give a concise and clear response in English only for a farmer asking: "${prompt}"` }]
    }]
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData)
    });

    const data = await res.json();
    setTimeout(()=>{
      const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't find an answer.";
      displayMessage(botReply, "bot");
    },300);
  } catch (err) {
    displayMessage("check your internet connection or try again later.", "bot");
    console.error(err);
  }
}
