window.onload = setupFunction;

let postCount = 0;

function setupFunction() {
    document.getElementById("post-button").onclick = postFunction;
    document.getElementById("clear-button").onclick = clearFunction;
}

function postFunction() {
    let message = document.getElementById("message").value;
    let status = document.getElementById("status");

    if (message.trim() == "") {
        status.textContent = "Please write a message first.";
        document.getElementById("message").focus();
        return;
    }

    let target;

    if (postCount == 0) {
        target = document.getElementById("topic");
    } else if (postCount == 1) {
        target = document.getElementById("reply1");
    } else if (postCount == 2) {
        target = document.getElementById("reply2");
    } else {
        status.textContent = "All 3 messages are posted. Press Clear to start again.";
        return;
    }

    target.textContent = message;
    target.className = "post-text posted";
    postCount++;
    document.getElementById("message").value = "";
    status.textContent = postCount + " of 3 messages posted";
    document.getElementById("message").focus();
}

function clearFunction() {
    document.getElementById("topic").textContent = "Your first message will appear here.";
    document.getElementById("reply1").textContent = "Waiting for the first reply.";
    document.getElementById("reply2").textContent = "Waiting for the second reply.";
    document.getElementById("topic").className = "post-text";
    document.getElementById("reply1").className = "post-text";
    document.getElementById("reply2").className = "post-text";
    document.getElementById("message").value = "";
    document.getElementById("status").textContent = "0 of 3 messages posted";
    postCount = 0;
    document.getElementById("message").focus();
}
