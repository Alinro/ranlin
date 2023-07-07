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

function createLinks(
  appContainer: HTMLDivElement,
  numberOfLinks: number,
  linkLength: number
) {
  for (let i = 0; i < numberOfLinks; i++) {
    const a = document.createElement("a");
    a.href = makeid(linkLength);
    a.innerText = a.href;

    const div = document.createElement("div");
    div.appendChild(a);

    appContainer.appendChild(div);
  }
}

function createMetadata(
  appContainer: HTMLDivElement,
  numberOfMetadata: number
) {
  for (let i = 0; i < numberOfMetadata; i++) {
    const p1 = document.createElement("p");
    p1.textContent = makeid(7);
    p1.classList.add("first");

    const p2 = document.createElement("p");
    p2.textContent = makeid(3);
    p2.classList.add("second");

    const div = document.createElement("div");

    div.appendChild(p1);
    div.appendChild(p2);

    appContainer.appendChild(div);
  }
}

function createContent(
  numberOfLinks: number,
  linkLength: number,
  numberOfMetadata: number
) {
  const appContainer = document.querySelector<HTMLDivElement>("#app");

  if (!appContainer) {
    throw new Error("App container does not exist");
  }

  createLinks(appContainer, numberOfLinks, linkLength);
  createMetadata(appContainer, numberOfMetadata);
}

createContent(
  import.meta.env.VITE_NUMBER_OF_LINKS,
  import.meta.env.VITE_LINK_LENGTH,
  import.meta.env.VITE_NUMBER_OF_METADATA
);
