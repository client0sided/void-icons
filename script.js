const toast = document.getElementById("toast");
const copyInput = document.getElementById("copyInput");

function showToast() {
  toast.textContent = "Copied";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1400);
}

function selectAndCopy(text) {
  copyInput.value = text;
  copyInput.select();
  document.execCommand("copy");
}

fetch("icons.json")
  .then((res) => res.json())
  .then((data) => {
    const grid = document.getElementById("grid");
    data.icons.forEach((icon) => {
      const card = document.createElement("div");
      card.className = "icon-card";

      const img = document.createElement("img");
      img.src = icon.svg;
      img.alt = icon.name;

      const name = document.createElement("span");
      name.textContent = icon.name;

      card.appendChild(img);
      card.appendChild(name);

      card.addEventListener("click", () => {
        selectAndCopy(icon.asset);
        showToast();
      });

      grid.appendChild(card);
    });
  });
