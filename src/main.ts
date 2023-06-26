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

for (let i = 0; i < 10; i++) {
  const a = document.createElement("a");
  a.href = makeid(5);
  a.innerText = a.href;
  document.querySelector<HTMLDivElement>("#app")?.appendChild(a);
}
