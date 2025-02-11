document.addEventListener("DOMContentLoaded", function () {
    let noCount = 0;
    const yesButton = document.getElementById("yes-btn");
    const noButton = document.getElementById("no-btn");
    const message = document.getElementById("message");
    const heartGif = document.getElementById("heartGif");
    const fireworks = document.getElementById("fireworks");
    const question = document.getElementById("question");
  
    yesButton.addEventListener("click", function () {
      noButton.disabled = true;
      // If the user never clicked "NO" first, show the GIF and fireworks.
      if (noCount === 0) {
        heartGif.classList.remove("hidden");
        fireworks.classList.remove("hidden");
        message.innerHTML =
          "Yay! I'm glad you said yes. I know that we aren't in a good position right now, but we'll get through it. You are so important to me, Joe, and I want you to know that I will not give up on you or us. I want us to have a happy and fantastic life together—where we can laugh, cry, have fun, tease others, and more. I want us to enjoy every moment we have with no regrets; I'll always choose you. I love you, my gorgeous!";
        startFalling("❤️", "🌹");
      } else {
        // If "NO" was clicked first, make the custom emojis fall.
        fallingEmojis(["😖", "💀", "🙄"]);
        message.innerHTML =
          "You said no first 😢; Don't really know how to feel. Anyway, I'm glad you changed your mind. You would have gotten a better text if you hadn't clicked no 🥱. I love you, my gorgeous!";
      }
    });
  
    noButton.addEventListener("click", function () {
      noCount++;
      let responses = [
        "Why not Baby?",
        "Are you sure?",
        "Should I beg?",
        "Pretty Pleasee",
        "I'll give you lots of chocolates",
        "Head maybe?",
        "Wait, really?",
        "Babe???",
        "But... I thought you loved me?",
        "Are you serious? Again?",
        "Stooopp",
        "If you say no one more time, I'll stop talking to you.",
        "BABE!",
        "Damn, you're really invested in this answer, huh?",
        "Can't believe this",
        "I get it, okay?",
        "For real?",
        "Stop it 😢",
        "FINE!",
        "I give up!😤"
      ];
      if (noCount <= responses.length) {
        message.innerHTML = responses[noCount - 1];
      }
      if (noCount === responses.length) {
        // When melancholic theme is reached: hide buttons & question, change theme.
        yesButton.classList.add("hidden");
        noButton.classList.add("hidden");
        question.classList.add("hidden");
        document.body.classList.add("sad-theme");
        message.innerHTML =
          "Wow, Joe, thanks! Please close this page 😒😑.";
        startFalling("💔", "😭");
      }
    });
  
    // Function to start falling emojis (used in both branches)
    function startFalling(emoji1, emoji2) {
      setInterval(() => {
        let emoji = document.createElement("div");
        emoji.innerHTML = Math.random() > 0.5 ? emoji1 : emoji2;
        emoji.classList.add("falling");
        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.fontSize = "30px";
        document.body.appendChild(emoji);
        setTimeout(() => emoji.remove(), 3000);
      }, 200);
    }
  
    // New function to make falling emojis from an array (for the YES branch after a prior NO)
    function fallingEmojis(emojisArray) {
      setInterval(() => {
        let emoji = document.createElement("div");
        let randomEmoji = emojisArray[Math.floor(Math.random() * emojisArray.length)];
        emoji.innerHTML = randomEmoji;
        emoji.classList.add("falling");
        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.fontSize = "30px";
        document.body.appendChild(emoji);
        setTimeout(() => emoji.remove(), 3000);
      }, 200);
    }
  });
  