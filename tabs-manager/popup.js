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
      "https://flexiple.com/*",
      "https://docs.github.com/*"
    ]
}); // Array
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
console.log(tabs);



let quickList = [];
let reference='';
let quickString = '';
for (let i=0;i<tabs.length;i++) {
    reference=`[${tabs[i].title}](${tabs[i].url})`;
    console.log(`[${tabs[i].title}](${tabs[i].url}`);
    quickList.push(reference);
    
    let keyValuePairToAdd = null;
    for (let j=0;j<tabs.length;j++){
        let key='reference';
        let value=reference;
        keyValuePairToAdd = {key:value};
    }
    tabs[i].reference=reference;
    quickString = quickString + '\n' + reference + '\n';
    console.log(tabs[i]);
}

console.log(quickString);
let totalString = '';
for (let h=0; h<listOfWindowsOpen.length;h++) {
    for (let i=0; i<tabs.length; i++){
        // let listOfTabsInThisWindow = [];
        let stringOfTabsInThisWindow = '';
        if (listOfWindowsOpen[h] == tabs[i].windowId) {
            console.log(tabs[i].reference);
            console.log(tabs[i].windowId);
            // listOfTabsInThisWindow = [];
            stringOfTabsInThisWindow = stringOfTabsInThisWindow + '\n' + tabs[i].reference + '\n';
        }
        totalString += stringOfTabsInThisWindow + '\n';
    }
    let linePerWindow = '____' + '\n';
    console.log(linePerWindow);
    totalString += linePerWindow;
}

console.log(totalString);

let superString = '';
let windowListOfTabs = [];
let allWindowsTabsObject = {};
for (let i = 0; i < listOfWindowsOpen.length ; i++) { // 0-2
    console.log('listOfWindowsOpen[i] =',listOfWindowsOpen[i]); // the 3 window numbers
    for (let j = 0; j <tabs.length; j++) {
        if (listOfWindowsOpen[i] == tabs[j].windowId) {
            windowListOfTabs.push(tabs[j].id);
        }
    } // push each tab-in-this-window to windowListOfTabs
    allWindowsTabsObject[listOfWindowsOpen[i]]=windowListOfTabs;
    windowListOfTabs = [];

}
console.log(allWindowsTabsObject);

// Redo above list for object

let windowObjectOfTabs = {};
let allWindowsTabsObject3 = {};
for (let i = 0; i < listOfWindowsOpen.length ; i++) { // 0-2
    console.log('listOfWindowsOpen[i] =',listOfWindowsOpen[i]); // the 3 window numbers
    for (let j = 0; j <tabs.length; j++) {
        // console.log (i);
        // console.log (listOfWindowsOpen[i]); // windowId

        for (let k = 0; k < Object.values(listOfWindowsOpen[i]).length;k++) {
            if (listOfWindowsOpen[i] == tabs[j].windowId) {
                windowObjectOfTabs[k] = tabs[j].id;
            }
        }

    } // push each tab-in-this-window to windowListOfTabs
    allWindowsTabsObject3[listOfWindowsOpen[i]]=windowObjectOfTabs;
    windowObjectOfTabs = [];
}
console.log(allWindowsTabsObject3);

/*
 * allWTO2 = 
 * {
 *      key : allthisWKVPairs={
 *                              thisWKVP={ composite=key : value = tabs[j] }
 *                              thisWKVP={ composite=key : value = tabs[j] }
 *                              thisWKVP={ composite=key : value = tabs[j] }
 *      },
 *      key : 
 *      key : 
 * }
 * 
 * 
 * 
 */

// get an object per window:
let allWTO2={};
for (let i = 0; i < listOfWindowsOpen.length ; i++) { // for each tab in the current window:
    for (let j = 0; j < tabs.length; j++) {
        // let allthisWindowKeyValuePairs = {};
        // let thisWindowKeyValuePair={}
        // console.log(Object.keys(allWindowsTabsObject)[i]);
        // console.log(tabs[j].windowId);
        let composite={};
        if (Object.keys(allWindowsTabsObject)[i] == tabs[j].windowId) {
            let thisWindow = tabs[j].windowId; // #
            let key = tabs[j].id;
            let value = tabs[j];
            composite = {key:value};
            // console.log(composite);
        }

        // =composite;
        // allWTO2[listOfWindowsOpen[i]]=;
        // thisWindowKeyValuePair={};
    }
}
console.log('allWTO2 =',allWTO2);
console.log('superString:\n', superString);

// pass in pre 54 return tabs

// for (){

// }

// let arg = tab.id
// let argTabDotId = ;
function passInIdReturnTab(argTabDotId) {
    let tab = null;
    for (let i = 0; i<tabs.length;i++) {
        if ( tabs[i].windowId == argTabDotId ) {
            tab = tabs[i];
            break;
        }
    }
    return tab;
}


for (let i=0; i < windowListOfTabs.length; i++) {
    for (let j=0; j < allWindowsTabsObject.length; j++) {
        let argTabDotId = tabs[j].windowId;
        allWindowsTabsObject.windowListOfTabs[i] = passInIdReturnTab(argTabDotId); // now we have swapped in the object 
    }
}

console.log(allWindowsTabsObject);

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
