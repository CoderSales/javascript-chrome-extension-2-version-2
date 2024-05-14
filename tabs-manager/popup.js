const tabs = await chrome.tabs.query({
    url: [
      "https://developer.chrome.com/docs/webstore/*",
      "https://developer.chrome.com/docs/extensions/*",
      "https://github.com/*",
      "https://stackoverflow.com/*",
      "https://www.w3schools.com/*",
      "https://www.google.com/*",
      "https://www.codecademy.com/*",
      "https://developer.mozilla.org/*"
    ]
});

let referenceString = "";

for (let i=0;i<tabs.length;i++) {
        console.log(tabs[i]);
}

for (let i=0;i<tabs.length;i++) {
    referenceString = referenceString + `[${tabs[i].title}](${tabs[i].url})`+"\n\n";
}

console.log(referenceString);

const collator = new Intl.Collator();
tabs.sort((a, b) => collator.compare(a.title, b.title));

const template = document.getElementById("li_template");
const elements = new Set();

console.log("line 17: template:", template);
console.log("line 18: elements:", elements);


const iterator2 = elements.entries();

console.log(iterator2);

console.log("hi4");

console.log("line 25: elements.entries()",elements.entries());
const entries = elements.entries();
console.log("line 27:", entries);
for (const entry of entries) {
    console.log("line 29:", entry);
}
console.log("line 31: hi");






const iterator3 = elements[Symbol.iterator]();

console.log(iterator3.next().value);

console.log(iterator3.next().value);







for (const tab of tabs) {
    const element = template.content.firstElementChild.cloneNode(true);

    const title = tab.title.split("-")[0].trim();
    const pathname = new URL(tab.url).pathname.slice("/docs".length);

    element.querySelector(".title").textContent = title;
    element.querySelector(".pathname").textContent = pathname;
    element.querySelector("a").addEventListener("click", async () => {
        // need to focus window as well as the active tab
        await chrome.tabs.update(tab.id, { active: true });
        await chrome.windows.update(tab.windowId, { focused: true });
    });

    elements.add(element);
}

document.querySelector("ul").append(...elements);
  
const button = document.querySelector("button");
button.addEventListener("click", async () => {

        const tabIds = tabs.map(({ id }) => id);

        if (tabIds.length) {
            const group = await chrome.tabs.group({ tabIds });
            await chrome.tabGroups.update(group, { title: "DOCS" });
        }

    }

);
