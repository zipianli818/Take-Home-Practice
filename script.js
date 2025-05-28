const data = {
    fruits: ["Apple", "Banana", "Pear", "Watermelon", "Grape", "Strawberry", "Mango", "Blackberry"],
    spices: ["Salt", "Pepper", "Chilli", "Herbs", "Curry"],
    vegetables: ["Carrot", "Cucumber"]
  };
  
  const list = document.getElementById("list");
  const buttons = document.querySelectorAll(".tabs button");

  function renderList(items) {
    list.innerHTML = "";
    items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
  
      li.addEventListener("click", () => { 
        document.querySelectorAll(".list li").forEach(el => {
          el.classList.remove("selected");
        });// Remove selection from all items when select a new one
  
        li.classList.add("selected");
      });
  
      list.appendChild(li);
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => {
        b.classList.remove("btn-success");
        b.classList.add("btn-outline-success");
      });// Remove Bootstrap 'btn-success' and add 'btn-outline-success' to all

      btn.classList.remove("btn-outline-success");//bootstrap disappear
      btn.classList.add("btn-success");//bootstrap appear

      renderList(data[btn.dataset.tab]);
  });
});



renderList(data.vegetables);

