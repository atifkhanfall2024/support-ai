// Immediately Invoked Function Expression
(function () {

    const apiUrl = `${process.env.NEXT_PUBLIC_URL}/api/agent`;
    const ownerScript = document.currentScript;
    const Userid = ownerScript.getAttribute("data-owner-id");

    if (!Userid) {
        console.log("Owner id is not found");
        return;
    }

    // ===============================
    // Typing Animation Style
    // ===============================
    const style = document.createElement("style");
    style.innerHTML = `
        .typing-dot {
            animation: blink 1.4s infinite both;
            font-weight: bold;
            font-size: 16px;
        }

        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes blink {
            0% { opacity: .2; }
            20% { opacity: 1; }
            100% { opacity: .2; }
        }
    `;
    document.head.appendChild(style);

    // ===============================
    // 1️⃣ Floating Button
    // ===============================
    const button = document.createElement("div");
    button.innerHTML = "💬";
    document.body.appendChild(button);

    Object.assign(button.style, {
        position: "fixed",
        bottom: "30px",
        right: "40px",
        width: "70px",
        height: "70px",
        borderRadius: "50%",
        background: "black",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: "32px",
        zIndex: "999999",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
    });

    // ===============================
    // 2️⃣ Chat Container
    // ===============================
    const chatContainer = document.createElement("div");
    document.body.appendChild(chatContainer);

    Object.assign(chatContainer.style, {
        position: "fixed",
        bottom: "120px",
        right: "40px",
        width: "320px",
        height: "450px",
        background: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
        display: "none",
        flexDirection: "column",
        overflow: "hidden",
        zIndex: "999999"
    });

    // ===============================
    // Header
    // ===============================
    const header = document.createElement("div");
    header.innerHTML = `
        <span>Customer Support</span>
        <span id="closeChat" style="cursor:pointer;font-size:18px;">✖</span>
    `;

    Object.assign(header.style, {
        background: "black",
        color: "white",
        padding: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "14px"
    });

    chatContainer.appendChild(header);

    // ===============================
    // Messages Area
    // ===============================
    const messages = document.createElement("div");

    Object.assign(messages.style, {
        flex: "1",
        padding: "10px",
        overflowY: "auto",
        background: "#f4f4f4",
        display: "flex",
        flexDirection: "column",
        gap: "8px"
    });

    chatContainer.appendChild(messages);

    // ===============================
    // Input Area
    // ===============================
    const inputWrapper = document.createElement("div");

    Object.assign(inputWrapper.style, {
        display: "flex",
        padding: "10px",
        borderTop: "1px solid #ddd",
        gap: "5px"
    });

    const input = document.createElement("input");
    input.placeholder = "Type a message";

    Object.assign(input.style, {
        flex: "1",
        padding: "8px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        outline: "none"
    });

    const sendBtn = document.createElement("button");
    sendBtn.innerText = "Send";

    Object.assign(sendBtn.style, {
        padding: "8px 12px",
        background: "black",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
    });

    inputWrapper.appendChild(input);
    inputWrapper.appendChild(sendBtn);
    chatContainer.appendChild(inputWrapper);

    // ===============================
    // Toggle
    // ===============================
    button.addEventListener("click", () => {
        chatContainer.style.display = "flex";
    });

    header.querySelector("#closeChat").addEventListener("click", () => {
        chatContainer.style.display = "none";
    });

    // ===============================
    // Add Message
    // ===============================
    function addMessage(text, sender, isLoading = false) {

        const bubble = document.createElement("div");

        if (isLoading) {
            bubble.innerHTML = `
                <span class="typing-dot">.</span>
                <span class="typing-dot">.</span>
                <span class="typing-dot">.</span>
            `;
        } else {
            bubble.innerText = text;
        }

        Object.assign(bubble.style, {
            maxWidth: "75%",
            padding: "8px 12px",
            borderRadius: "12px",
            fontSize: "13px",
            lineHeight: "1.4",
            wordWrap: "break-word",
            display: "inline-block"
        });

        if (sender === "user") {
            bubble.style.background = "black";
            bubble.style.color = "white";
            bubble.style.alignSelf = "flex-end";
        } else {
            bubble.style.background = "#e5e5e5";
            bubble.style.color = "black";
            bubble.style.alignSelf = "flex-start";
        }

        messages.appendChild(bubble);
        messages.scrollTop = messages.scrollHeight;

        return bubble;
    }

    // ===============================
    // Send Message
    // ===============================
    async function sendMessage() {

        const userText = input.value.trim();
        if (!userText) return;

        addMessage(userText, "user");
        input.value = "";

        // Show loader
        const loadingBubble = addMessage("", "bot", true);

        try {

            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Userid: Userid,
                    Usermessage: userText
                })
            });

            const data = await response.json();

            // Remove loader
            loadingBubble.remove();

            // Show response
            addMessage(data.message || "No response from server", "bot");

        } catch (error) {
            loadingBubble.remove();
            addMessage("Something went wrong. Please try again.", "bot");
            console.error(error);
        }
    }

    sendBtn.addEventListener("click", sendMessage);

    input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

})();