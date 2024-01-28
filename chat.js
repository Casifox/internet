document.addEventListener("DOMContentLoaded", function () {
    loadMessages();
});

function loadMessages() {
    // Utilisez une requête AJAX pour récupérer les messages depuis la base de données
    // Mettez à jour le contenu du chat-container avec les messages récupérés
}

function sendMessage() {
    var message = document.getElementById("message-input").value;

    // Utilisez une requête AJAX pour envoyer le message à la base de données
    // Mettez à jour le chat-container avec le nouveau message immédiatement (optionnel)
    updateChat(message);

    // Effacez le champ de saisie après l'envoi
    document.getElementById("message-input").value = "";
}

function updateChat(message) {
    var chatContainer = document.getElementById("chat-container");
    chatContainer.innerHTML += "<p>" + message + "</p>";
}
