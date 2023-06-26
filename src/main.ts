import "./style.css";

// generate a random id to use in the url
// source https://stackoverflow.com/a/1349426
function makeid(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const appContainer = document.querySelector<HTMLDivElement>("#app");

for (let i = 0; i < import.meta.env.VITE_NUMBER_OF_LINKS; i++) {
  const a = document.createElement("a");
  a.href = makeid(import.meta.env.VITE_LINK_LENGTH);
  a.innerText = a.href;

  const div = document.createElement("div");
  div.appendChild(a);

  appContainer?.appendChild(div);
}
