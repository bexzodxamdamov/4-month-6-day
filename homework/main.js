const form = document.querySelector(".form");
const input = document.querySelectorAll(".input");
const box = document.querySelector(".box");
const modal = document.querySelector(".modal");
const input2 = document.querySelectorAll(".input2");
const users = [];

function render() {
  box.innerHTML = "";

  for (let i = 0; i < users.length; i++) {
    let ul = document.createElement("ul");
    ul.innerHTML = `
    <h1>User ${i + 1}</h1>
    <div class="ul-div">
       <li>1) ${users[i].name}</li>
       <li>2) ${users[i].age}</li>
       <li>3) ${users[i].email}</li>
       <li>4) ${users[i].number}</li>
    </div>
    <li class="ul-li">
      <button onclick ="editUser(${users[i].id})">edit</button>
      <button onclick ="deleteUser(${users[i].id})" >delete</button>
    </li>
    `;

    box.append(ul);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let obj = {};

  input.forEach((el) => {
    obj[el.name] = el.value;
    obj.id = users.length + 1;
    el.value = "";
  });

  users.push(obj);
  render();
});

const editSingleUser = (user) => {
  for (let i of input2) {
    i.value = user[i.name];
  }

  const form2 = document.querySelector(".form2");
  form2.addEventListener("submit", (e) => {
    e.preventDefault();
    let obj = {};

    for (let i of input2) {
      obj[i.name] = i.value;
      id = user.id;
      i.value = "";
    }

    for (let i = 0; i < users.length; i++) {
      if (user.id == users[i].id) {
        users.splice(i, 1, obj);
      }
    }
    modal.classList.remove("open");
    render();
  });
};

const deleteUser = (id) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users.splice(i, 1);
    }
  }
  render();
};

const editUser = (id) => {
  modal.classList.add("open");

  for (let i of users) {
    if (i.id == id) {
      editSingleUser(i);
    }
  }
};
