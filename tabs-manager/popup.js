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
});
const groups = [];
const allTabs=tabs;
// const allTabs = await chrome.tabs.query({});
console.log(allTabs);
for (let i=0;i<allTabs.length;i++) {
    const tab = allTabs[i];
}

const allWindows = await chrome.windows.getAll();
console.log(allWindows);

const allWindowTabs = [];

const allWindowTabsReferences = {};
let allWindowTabsReferencesString = "";

const allWindowIds = [];

for (let i=0;i<allWindows.length;i++) {
    allWindowIds.push(allWindows[i].id);
}

console.log(allWindowIds);
let trueCheck = false;
let trueCheckCount = 0;
let trueCheckList = [];
console.log("allWindows.length = ",allWindows.length); // too many iterations after this | = 9
for (let i=0;i<allWindows.length;i++) { // 0 to 9
    
    console.log(allWindows[i].id); // prints Window id (Group)
    
    let thisWindowTabs = [];
    let thisWindowsTabsReferences = [];
    let thisWindowsTabsReferencesString = "";
    console.log("allTabs.length = ", allTabs.length); // too many iters after this | = 47
    for (let j=0;j<allTabs.length;j++) { //0 - 47 
        for (let k=0;k<allWindows.length;k++) { // 0-9
            for (let l=0;l<allTabs.length;l++) { // 0-47
                if (allWindows[i]==allWindows[k]) {
                    thisWindowTabs.push(allTabs[l])
                }
            }
        }
    }
    
    for (let j=0;j<allTabs.length;j++) { // 0-47
        if (allWindows[i].id == thisWindowTabs[j].windowId) {
            thisWindowsTabsReferences.push(`[${thisWindowTabs[j].title}](${thisWindowTabs[j].url})`); // pushes each tab in this Window Group
            thisWindowsTabsReferencesString=thisWindowsTabsReferencesString + "\n\n" + `[${thisWindowTabs[j].title}](${thisWindowTabs[j].url})`; // pushes each tab in this Window Group
        }
    }
    
    allWindowTabsReferences[allWindows[i].id] = thisWindowsTabsReferences;
    let thisWindowId = 0;
    let lastWindowId = 0;
    
    for (let windowIdi = 0; windowIdi< allWindowIds.length; windowIdi++) {
        thisWindowId = allWindows[windowIdi].id;
        console.log("thisWindowId = ",allWindows[windowIdi].id);
        console.log("windowIdi = ",windowIdi); // 0-8 | Why repeats?
        console.log(allWindows);
        if (windowIdi==allWindows.length) {
            break;
        }
        if (thisWindowId != 0 ) {
            const lastWindowId = thisWindowId-1;
        }
        
        console.log(allWindows[i]);
        console.log(allWindows[i].id);
        console.log(allWindows[0].id);
        console.log(thisWindowId);
        console.log(allWindows[0]==thisWindowId);
        if (allWindows[0].id==thisWindowId) {
            trueCheck=true;
            trueCheckCount++;
            console.log(thisWindowId);
            trueCheckList .push(thisWindowId);
        } //  if first then push
        //but if not:
        else if (allWindows[0].id != thisWindowId) { // i.e. most cases
            trueCheck=false;
            console.log("thisWindowId = ",thisWindowId);
            trueCheckList.push(thisWindowId);
        }
        
        console.log("allWindows[0].id", allWindows[0].id); // ...204
        console.log("thisWindowId",thisWindowId);
        
        if (allWindows[0].id != thisWindowId) { // if this is NOT the first of the window id's:
            if(allWindows[i-1] == (thisWindowId-1) && allWindows[i] == thisWindowId) {
                const windowsIdToAddToString = thisWindowId;
                windowsIdToAddToString =+ thisWindowsTabsReferencesString + '\n\n' + windowsIdToAddToString + '\n\n';
                console.log('hi');
            }
        } else if (allWindows[0].id == thisWindowId) { // if this is the first of the window id's:
            // if(allWindows[i-1].id == lastWindowId && allWindows[i].id == thisWindowId) {
                if(allWindows[i-1] == lastWindowId && allWindows[i] == thisWindowId) {
                    const windowsIdToAddToString = thisWindowId;
                    thisWindowsTabsReferencesString = windowsIdToAddToString + '\n\n' + thisWindowsTabsReferencesString + '\n\n';
                }
        }
        
        console.log(thisWindowsTabsReferencesString);
        allWindowTabsReferencesString = allWindowTabsReferencesString + thisWindowsTabsReferencesString;
        
        console.log("line 100");
        console.log(allWindows[0].id);
    }
}

console.log(allWindowTabsReferences);

console.log(allWindowTabsReferencesString);

let referenceString = "";

for (let i=0;i<tabs.length;i++) {
    console.log("line 74: tab number",i);
    console.log(`[${tabs[i].title}](${tabs[i].url})`);
}

for (let i=0;i<tabs.length;i++) {
    console.log(tabs[i].title);
    console.log(tabs[i].url);
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

console.log(trueCheck);
console.log(trueCheckCount);
console.log(trueCheckList);
console.log("allWindows.length = ",allWindows.length); // too many iterations after this
console.log("allTabs.length = ", allTabs.length); // from line 65
