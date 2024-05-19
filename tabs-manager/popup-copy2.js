const tabs = await chrome.tabs.query({
    url: [
      "https://developer.chrome.com/docs/webstore/*",
      "https://developer.chrome.com/docs/extensions/*",
      "https://github.com/*",
      "https://stackoverflow.com/*",
      "https://www.w3schools.com/*",
      "https://www.google.com/*",
      "https://www.codecademy.com/*",
      "https://developer.mozilla.org/*",
      "https://www.geeksforgeeks.org/*",
      "https://docs.aws.amazon.com/*",
      "https://aws.amazon.com/*",
      "https://cran.r-project.org/*",
      "https://journal.r-project.org/archive/2014/RJ-2014-020/RJ-2014-020.pdf",
      "https://posit.co/download/rstudio-server/*",
      "https://learn.microsoft.com/*",
      "https://askubuntu.com/*",
      "https://fsl.fmrib.ox.ac.uk/*",
      "https://neuroconductor.org/*",
      "https://www.rdocumentation.org/*",
      "https://ftp.nmr.mgh.harvard.edu/*",
      "https://pubmed.ncbi.nlm.nih.g/*",
      "https://www.javatpoint.com/*",
      "https://flexiple.com/*"
    ]
}); // Array
console.log(tabs);
let listOfWindowsOpen = [];
for (let i=0; i<tabs.length;i++) {
    if (i==0) {
        listOfWindowsOpen.push(tabs[i].windowId)
    }

    if (i>=1) {
        if (tabs[i-1].windowId != tabs[i].windowId) { // if new windowId, push it to list, increment by 1
            listOfWindowsOpen.push(tabs[i].windowId)
            i++;
        }
    }
}

let superString = '';

let windowListOfTabs = [];

// for each window:
for (let i = 0; i < listOfWindowsOpen.length ; i++) { // 0-2
    
    console.log('listOfWindowsOpen[i] =',listOfWindowsOpen[i]); // the 3 window numbers

    // create a list for that window:
    // for all the tabs, go through them and make a list of just the ones with this windowId:
    for (let j = 0; j < tabs.length;j++){//2;j++){//tabs.length; j++) {
        if (listOfWindowsOpen[i] == tabs[j].windowId) {
            windowListOfTabs.push(tabs[j].id);
        }
    } // push each tab-in-this-window to windowListOfTabs
    
}

console.log('windowListOfTabs =',windowListOfTabs);

console.log('superString:\n', superString);


const collator = new Intl.Collator();
tabs.sort((a, b) => collator.compare(a.title, b.title));

const template = document.getElementById("li_template");
const elements = new Set();

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

// console.log("allWindows.length = ",allWindows.length); // too many iterations after this
// console.log("allTabs.length = ", allTabs.length); // from line 65
