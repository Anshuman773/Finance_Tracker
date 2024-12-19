document.getElementById("expenditure-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const description = document.getElementById("description").value;
    const amount = document.getElementById("amount").value;

    if (description && amount) {
        const transactionList = document.getElementById("transaction-list");
        const listItem = document.createElement("li");
        listItem.textContent = `${description}: $${amount}`;
        transactionList.appendChild(listItem);

        document.getElementById("description").value = '';
        document.getElementById("amount").value = '';
    }
});

// Chatbot popup toggle
const chatbotIcon = document.getElementById("chatbot");
const chatbotPopup = document.getElementById("chatbot-popup");

chatbotIcon.addEventListener("click", function () {
    chatbotPopup.style.display = chatbotPopup.style.display === "none" ? "block" : "none";
});

// Mock chat function for chatbot
document.getElementById("send-chatbot").addEventListener("click", function () {
    const userInput = document.getElementById("chatbot-input").value;
    if (userInput) {
        alert("Investment Idea: Diversify your portfolio with a mix of stocks and bonds.");
        document.getElementById("chatbot-input").value = '';
    }
});
