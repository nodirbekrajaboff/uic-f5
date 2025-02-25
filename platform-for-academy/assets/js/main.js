const students = [
  {
    id: 1,
    fullName: "Alisher Qodirov",
    status: "well",
  },
  {
    id: 2,
    fullName: "Jahongir Pulatov",
    status: "warning",
  },
  {
    id: 3,
    fullName: "Shavkat Axrorov",
    status: "cheating",
  },
];

for (let i = 0; i < students.length; i++){
 const myDiv = document.createElement("div")   ;

 myDiv.className = "bg-slate-50 p-2.5 w-full rounded-lg flex items-center";

 let icon = "";

 if(students[i].status === "warning")
icon =`<i data-feather="check" class="text-green-500 size-[18px] ml-auto"></i>`
else if(students[i].status === "cheating")
    icon = `<i data-feather="cross" class="text-green-500 size-[18px] ml-auto"></i>`

 myDiv.innerHTML = `<div
              class="rounded-full size-10 bg-gradient-to-t from-green-600 to-green-500 text-white text-2xl grid place-items-center"
            >
              <i data-feather="user" class="size-[18px]"></i>
            </div>
            <h4 class="ml-2.5">${students[i].fullName}</h4>
            ${icon}`

 document.getElementById("div-collection").appendChild(myDiv)

 myDiv.addEventListener("click", ()=>{

 })
}