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

let allWindowsObject = {};

// loop i then loop j:
for (let i=0; i < allWindows.length;i++) {

    console.log('hi');
    console.log('tabs[i].length = ',tabs[i].length);
    console.log('tabs[i] = ',tabs[i]);

    console.log('allWindows[i].length = ',allWindows[i].length);
    console.log('allWindows[i] = ',allWindows[i]);
    // need interim variable in between i and j here ish
    // allTabsInThisWindow
    for (let j=0; j < allWindows[i].length;j++) {
        allWindowsObject[i] = `{${tabs[i].windowId}:${tabs[i].id}}` ; // {0:{},1:{},2:{}}
    }
}

for (let i=0;i<allWindows.length;i++) {
    allWindowIds.push(allWindows[i].id);
    for (let j=0;j<allTabs.length;j++) {
        const tab = allTabs[j];
    }
}

// new code:
const windowIds = []; // WinIds version 2 | new variable

// new loop:
for (let i=0;i<allWindows.length;i++) {
    windowIds.push(allWindows[i].id);
}

console.log("windowsIds : ", windowIds);

for (let i=0;i<allWindows.length;i++) {
    allWindowIds.push(allWindows[i].id);
    for (let j=0;j<allTabs.length;j++) {
        const tab = allTabs[j];
    }
}

console.log(allWindowIds);
let trueCheck = false;
let trueCheckCount = 0;
let trueCheckList = [];
console.log("allWindows.length = ",allWindows.length); // too many iterations after this | = 9

let winObject = {};

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
            thisWindowsTabsReferences.push(`[${thisWindowTabs[j].title}](${thisWindowTabs[j].url})`); // pushes each tab in this Window Group | (adds to list)
            thisWindowsTabsReferencesString=thisWindowsTabsReferencesString + "\n\n" + `[${thisWindowTabs[j].title}](${thisWindowTabs[j].url})`; // pushes each tab in this Window Group (adds to String)
        }
    }
    
    allWindowTabsReferences[allWindows[i].id] = thisWindowsTabsReferences;
}

console.log(allWindowTabsReferences);

console.log(Object.keys(allWindowTabsReferences).length);

for (let i=0;i<Object.keys(allWindowTabsReferences).length;i++) {
    console.log(Object.keys(allWindowTabsReferences)[i]);
    console.log(Object.values(allWindowTabsReferences)[i]);
}

console.log(Object.keys(allWindowTabsReferences).length);

let windowStringOfTabReferences = '';

console.log('allWindowTabsReferences =', allWindowTabsReferences);

let allWindowStrings = '';

for (let i=0;i<Object.keys(allWindowTabsReferences).length;i++) {
    console.log(Object.keys(allWindowTabsReferences)[i]);
    console.log(Object.values(allWindowTabsReferences)[i]);
    // console.log(Object.values(allWindowTabsReferences[i]));
    console.log(   Object.values(allWindowTabsReferences)    );
    // console.log(   Math.max(Object.keys(Object.values(allWindowTabsReferences)))    );
    console.log(   Object.keys(Object.values(allWindowTabsReferences))    );
    for (let k=0; k<Object.keys(Object.values(allWindowTabsReferences)).length;k++) {
        console.log(Object.keys(Object.values(allWindowTabsReferences))[k]);
    }
    let allWindowTabsReferencesValues=Object.values(allWindowTabsReferences);
    // console.log(   Object.values(allWindowTabsReferencesValues)    );
    
    let allWindowTabsReferencesValuesKeys = Object.keys(allWindowTabsReferencesValues); // 0:"0", 1:"1", 2:"2" Objects
    console.log(Object.keys(allWindowTabsReferencesValuesKeys));

    console.log(allWindowTabsReferences);
    // console.log(allWindowTabsReferences.   key.    key?);
    //                                                      1 , 2, 3
    // console.log(Object.values(allWindowTabsReferences.allWindows[i].thisWindowsTabsReferences[j]));
    
    // for (let j=0;j<Object.values(allWindowTabsReferences[i]);j++) {
    let thisWindowArray=Object.keys(allWindowTabsReferences);
    console.log(Object.keys(allWindowTabsReferences));
    console.log(thisWindowArray.length);
    for (let j=0;j<thisWindowArray.length;j++) {
        // console.log(Object.values(allWindowTabsReferences.allWindows[i].thisWindowsTabsReferences[j]));
        windowStringOfTabReferences = '\n' + `(${Object.keys(allWindowTabsReferences)[j]})[${Object.values(allWindowTabsReferences)[j]})` +'\n';
        // windowStringOfTabReferences = '\n' + `(${Object.keys(allWindowTabsReferences)[i]})[${Object.values(allWindowTabsReferences)[i]})` +'\n';
    }
    allWindowStrings = allWindowStrings + windowStringOfTabReferences;
}


console.log(allWindowTabsReferencesString);

console.log(windowStringOfTabReferences); // new String

console.log(allWindowStrings); // newer String

let referenceString = "";

for (let i=0;i<tabs.length;i++) {
    referenceString = referenceString + `[${tabs[i].title}](${tabs[i].url})`+"\n\n";
}

console.log(referenceString);

//

let totalString = '';
console.log(Object.keys(allWindowTabsReferences));
console.log(Object.keys(allWindowTabsReferences)[0]);
console.log(Object.keys(allWindowTabsReferences)[1]);
console.log(Object.keys(allWindowTabsReferences)[2]);

for (let h=0;h<Object.keys(allWindowTabsReferences).length;h++) {

    let windowIds2= Object.keys(allWindowTabsReferences);
    console.log(Object.keys(allWindowTabsReferences));
    totalString = totalString + '\n\n' + `${Object.keys(allWindowTabsReferences)[h]}` + '\n\n';
    
    let referenceStringPerWindow = "";

    console.log(tabs.length);
    console.log(tabs);
    console.log(tabs[h].windowId);

    // let tabkey = tabs[h].windowId

    // for (let h2=0;h2<tabs[h].)

    for (let i=0;i<tabs.length;i++) {
        referenceStringPerWindow = referenceStringPerWindow + `[${tabs[i].title}](${tabs[i].url})`+"\n\n";
    }

    console.log(referenceStringPerWindow);

    totalString = totalString + referenceStringPerWindow;
}

console.log('totalString = ', totalString);

//

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

console.log("allWindows.length = ",allWindows.length); // too many iterations after this
console.log("allTabs.length = ", allTabs.length); // from line 65
