const messageBtn = document.getElementById("msg-btn");
const messageInput = document.getElementById("msg-input");
const messageContainer = document.getElementById("msg-container");
const usersList = document.getElementById("users-list");

const fullName = prompt("To'liq ismingiz");

if (!fullName) document.body.innerHTML = "";

const userTemplate = (me, userFullName) => {
  console.log(me);

  return `<li
          class="px-3 py-2 cursor-pointer flex gap-4 items-center ${
            me ? "bg-blue-500" : "hover:bg-slate-800"
          }"
        >
          <div class="size-10 rounded-full bg-slate-700"></div>
          <span class="text-white text-sm font-medium">${userFullName}</span>
        </li>`;
};

usersList.innerHTML = userTemplate(true, fullName);

// Namuna
// userTemplate()

function messageTemplate(forMe, msg, userFullName) {
  if (forMe)
    return ` <li>
          <p
            class="bg-blue-500 p-5 rounded-sm max-w-96 float-right text-sm text-white"
          >
            ${msg}
          </p>
        </li>`;
  else
    return `<li>
          <p
            class="bg-gray-500 p-5 rounded-sm max-w-96 text-white text-sm float-left relative"
          >
            ${msg}
            <span class="absolute bottom-1 opacity-70 right-1 text-xs"> ${userFullName} </span>
          </p>
        </li>`;
}

function sendMessage() {
  if (messageInput.value === "") return alert("Iltimos habar yozing");

  messageContainer.innerHTML += messageTemplate(true, messageInput.value);

  messageInput.value = "";
}

messageInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) sendMessage();
});

messageBtn.addEventListener("click", sendMessage);

// messageInput.addEventListener("keydown", (event) =>
//   event.keyCode === 13 && sendMessage()
// );

const socket = new WebSocket("ws://10.4.0.197:4040/chat");

socket.addEventListener("message", () => {
  console.log("Ulanishda xatolik yuz berdi");
});
