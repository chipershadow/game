function startGame() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message");

  if (name === "" || phone === "") {
    message.style.color = "yellow";
    message.textContent = "Please fill in all fields!";
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    message.style.color = "red";
    message.textContent = "Enter a valid 10-digit phone number.";
    return;
  }

  // 👇 Your webhook URL goes here
  const webhookURL = "https://discord.com/api/webhooks/1361560709820973206/8FGxluW7Yz5PaQKOqUHgKDWOmLU83Cny0pAova5ko4trPLgPDOEx0YFMC5GKwj7WeASI";

  const discordData = {
    content: `🎮 **New Game Player Registered**\n👤 Name: ${name}\n📱 Phone: ${phone}`
  };

  fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(discordData)
  });

  message.style.color = "lightgreen";
  message.textContent = `Welcome, ${name}! Game loading...`;

  setTimeout(() => {
    window.location.href = "game.html";
  }, 2000);
}
