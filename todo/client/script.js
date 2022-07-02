/* eslint-disable */
const button = document.querySelector(".buttonAd");
const inputTitle = document.querySelector("#title");

const submitNewTask = (e) => {
  e.preventDefault();
  let id = Number(Math.round(Math.random() * 10000000));
  const isDone = false;
  let title = inputTitle.value;

  fetch("http://localhost:3000/api/todoLists/postNewTask", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id, title: title, isDone: isDone }),
  })
    .then(() => {
      alert("successful insert ");
    })
    .catch((err) => {
      console.error(err);
    });
  inputTitle.value = "";
};

button.addEventListener("click", submitNewTask);
