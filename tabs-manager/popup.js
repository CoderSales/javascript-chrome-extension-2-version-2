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
      "https://docs.github.com/*",
      "https://code.visualstudio.com/*",
      "https://code.visualstudio.com/docs/*",
      "https://www.oracle.com/java/*",
      "https://docs.oracle.com/*",
      "https://pwskills.com/*",
      "https://www.homeandlearn.co.uk/java/*",
      "https://www.codeproject.com/Articles/*",
      "https://www.codingame.com/*",
      "https://www.google.com/*"
    ]
}); // url Array
let listOfWindowsOpen = [];
let checkerVariable = false;
for (let i=0; i<tabs.length;i++) {
    if (i==0) {listOfWindowsOpen.push(tabs[i].windowId);}
    if (i>0) {
        if (tabs[i-1].windowId == tabs[i].windowId) {continue;} // don't add if windowId already in listOfWindowsOpen
        else if (tabs[i-1].windowId != tabs[i].windowId) { // if new windowId not consecutive,
            for (let entryIndex=0;entryIndex< listOfWindowsOpen.length ;entryIndex++) {if ( tabs[i].windowsId == listOfWindowsOpen[entryIndex] ) {checkerVariable = true;}}// go through the current listOfWindowsOpen | flag if found
            if (checkerVariable==true) {continue;} // if found don't add
            else if (checkerVariable == false) {listOfWindowsOpen.push(tabs[i].windowId); // only if not found: | push new to listOfWindowsOpen
                                                checkerVariable=false;}// reset checkerVariable
        }
    }
}
console.log(tabs);
console.log(listOfWindowsOpen);
let quickList = [];
let reference='';
let quickString = '';
let newWindowChecker = null;

// new declared vars:
let thisCell=[0,0];
for (let j=0 ; j<listOfWindowsOpen.length;) {
    for (let i=0;i<tabs.length;i++) {
        thisCell=[i,j];
        // console.log("i:",i);
        // console.log("j:",j);
        console.log(thisCell); // latest
        for (let winCount=0; winCount<listOfWindowsOpen.length;) {
            let thisWinList = [];
            if (tabs[i].windowId == listOfWindowsOpen[winCount]) { // now, for each tab, check if it's particular winId (from it's tab object) is in the window index list
                reference=`[${tabs[i].title}](${tabs[i].url})`; // and, (TODO: make sure iff) it is, construct and
                quickList.push(reference); // push to quickList
                // search the thing:
                // if (winCount!=listOfWindowsOpen.length) {let nextWinId = listOfWindowsOpen[winCount+1];} // if not last winCount in listOfWindowsOpen, let nextWinId = the next Count |
                // if (nextWinId)
                    let keyValuePairToAdd = null; // redundant? / for add to tabs object
                for (let j=0;j<tabs.length;j++){ // index j of all tabs open
                    let key='reference'; // 1 key called reference
                    let value=reference; // 2 value
                    keyValuePairToAdd = {key:value}; // 3 {key:value} pair, assemble!
                }
                tabs[i].reference=reference; // put that key value pair, called reference into tabs at reference // without using keyValuePairToAdd ?
                quickString = quickString + '\n' + reference + '\n'; // now, add quickString and reference to quickstring
                for (let i2=0;i2<tabs.length;i2++) { //  x = i2 | something = tabs |
                    // what are we searching for here?
                    // 
                    // if (win[0]) {
                        if (tabs[i2].windowId==listOfWindowsOpen[winCount]) {
                            thisWinList.push(tabs[i2].reference);
                        }
                        // rezero thisWinList:
                        thisWinList=[];
                }
            }
            // is this j or winCount ? :              v
            if (tabs[i].windowId == listOfWindowsOpen[winCount]) {// new | if last equals this, (in tabs), add it there? | no, go through (something everything) and,
                // add it to the list:
                // thisWinList.push(win[0]);
                thisWinList.push(listOfWindowsOpen[winCount]);
            }
            // console.log(thisWinList); // Array(1) V _| > ( 0: 1314654654 ) | logged for each open window | latest commented
            // if (winCount<listOfWindowsOpen.length){
                // if (listOfWindowsOpen[i+1] !=listOfWindowsOpen[i]){
                //     quickString+="\n____\n";
                // }
            // } if (winCount == listOfWindowsOpen.length){
                // quickString+="\n____\n";
            // }
            winCount++;
        }
        //  i++;
    }
    j++;
}

console.log(quickString); // a reference and a load of "\n____\n"
console.log(quickList);
let listOfWindows = [];
for (let i=0;i<tabs.length;i++){listOfWindows.push(tabs[i].windowId);}
console.log(listOfWindows); // check line 82
let thisString = "";
let thisWindowStrings = "";
let allWindowStrings = [];
let winId = -1;
let winIdString = "";
// uncomment:
// for (let h=0;h<listOfWindows.length;h++) { // for each window
//     winId = listOfWindows[h];
//     // winId = tabs[i]windowId;
//     winIdString = `${winId}`+"\n\n";
//     thisWindowStrings += winIdString;
//     for (let i=0;i<tabs.length;i++){ // go through all tabs
//         if (tabs[i].windowId == listOfWindows[h]) { // look for this windowId
//             // do the thing with url and title:
//             thisString = "[" + tabs[i].title + "](" + tabs[i].url + ")";
//             thisWindowStrings +=thisString+"\n\n";
//         }
//         allWindowStrings.push(thisWindowStrings+"____");
//         console.log(allWindowStrings);
//     }
// }

// reduced version of above:
// for (let h=0;h<listOfWindows.length;h++) { // for each window
//     for (let i=0;i<tabs.length;i++){ // go through all tabs
//         thisString = "[" + tabs[i].title + "](" + tabs[i].url + ")";
//         thisWindowStrings +=thisString+"\n\n";
//     }
//     allWindowStrings.push(thisWindowStrings+"____");
//     console.log(allWindowStrings);
// }

// new try:
// go to first tab
// look through all the windowId s
// 

// last commented:
// let windowTabObject = {};

// let key = "";
// let innerTabsObject = {};
// let keyInner = "";
// let valueInner = "";

// last commented:
// let tabsListThisWindow=[];
// for (let i = 0 ; i < tabs.length ; i++) {
//     for (let j = 0 ; j < listOfWindows.length ; j++) {
//         if(tabs[i].windowId==listOfWindows[j]){
//             key = listOfWindows[j];
//             // innerTabsObject = ...;
//             for (let k=0;k<tabs.length;k++){
//                 if(tabs[k].windowId==listOfWindows[j]){
//                     keyInner = `${tabs[k].windowId}`;
//                     valueInner = `${tabs[k].id}`;
//                     innerTabsObject[keyInner] = valueInner;
//                 }
//             }
//             windowTabObject[key] = [tabsListThisWindow];
//         }
//     }
// }
// console.log(windowTabObject);

// retry:

// let windowTabObject = {};
// let key = "";
// let tabsListThisWindow=[];
// for (let i = 0 ; i < tabs.length ; i++) {
//     for (let j = 0 ; j < listOfWindows.length ; j++) {
//         if(tabs[i].windowId==listOfWindows[j]){
//             key = listOfWindows[j];
//             // innerTabsObject = ...;
//             for (let k=0;k<tabs.length;k++){
//                 if(tabs[k].windowId==listOfWindows[j]){
//                     keyInner = `${tabs[k].windowId}`;
//                     valueInner = `${tabs[k].id}`;
//                     innerTabsObject[keyInner] = valueInner;
//                 }
//             }
//             windowTabObject[key] = [tabsListThisWindow];
//         }
//     }
// }
// console.log(windowTabObject);

// try 3:
let allWindowsObject = {}; // declare empty container
let count=0;

// declare for interior:
// let titleVar = null;
// let urlVar = null;
// let windowIdVar = null;
// let tabIdVar = null;
// part2:
let currentTabHolder = null;

// title : null,
let titleKeyValuePair= {};
// url   : null,
let urlKeyValuePair={};
// windowId : null,
let windowIdKeyValuePair={};
// tabId : null
let tabIdKeyValuePair={};

let resultTrue = false;

console.log(listOfWindows.length);
console.log(tabs.length);

let condensedWindowList = []; // remove duplicates
for (let thisWindowId in listOfWindows) {
    let alreadyThere = false;
    // thisWindowId is set:
    for (let i in condensedWindowList) {
        // for next if:
        // i is set:
        for (j in listOfWindows) {
            if (i == j) {
                alreadyThere = true;
            }
        }
    }
}

// again:
condensedWindowList = [];
console.log(listOfWindows);
let input = listOfWindows;
console.log(input);
/* 71324513413
 * 71231245126
 * 71346513461
 * 19822728976
 * 10347980189
 * 31324560194
 * 10325710080
 * 32013984752
 * 10347980189
 * 32013984752
 * 32013984752
 * 10347980189
 * 32013984752
 * 64698731235
 * 12346513461
 * 68797653212
 * 12346513461
 * 12346513461
 * 72312358865
 * 45321435896
 */

condensedWindowList = [];
condensedWindowList.length=0;
console.log(condensedWindowList);
let output = [];
output = condensedWindowList; 
console.log(output); // output (0) | Array(25) -> why?
let there = false;
for (let i in input) {

    console.log(i); // 0-19
    if (output.length>0 && output.length<= input.length) {//set upper limit
        console.log(output);//0-5|Array(25)|has duplicates -> why? Q->A Because if not else if fixed.
        for (let j in output) {//checking output for duplicates
            console.log(output);
            console.log(i);//
            console.log(j);
            
            if (i == j) {
                there = true;
                console.log(true);
            }
            else if (there == false) { // if not there push to output list.
                // push to output:
                output.push(i);
                console.log(i , "pushed", there);
                there=false;
                continue
            }
            there = false;
        }
    } else if (output.length==0) {
        output.push(i);
    }

    console.log("progress checker");
}

console.log("output:", output);


for (let tab in tabs) {
    console.log(tab); // 0-17
    for (let windowIdCurrentIteration in listOfWindows) {
        // console.log(listOfWindows[windowIdCurrentIteration]);
        // console.log(windowIdCurrentIteration);
        if ( tabs[windowIdCurrentIteration].windowsId == listOfWindows[windowIdCurrentIteration] ) {
            let thisTab=tabs[windowIdCurrentIteration];
            let thisTabTitle=thisTab.title;
            let thisTabUrl=thisTab.url;
            let thisTabWindowId=thisTab.windowId;
            let thisTabId=thisTab.id;

            allWindowsObject[windowIdCurrentIteration] = {
                thisTabTitle,
                thisTabUrl,
                thisTabWindowId,
                thisTabId
            };
            count++; // (for tabs[i] in if statement) | needs to be in here so not exceed number of tabs | only when tab in window of outer loop | not incremented until after populated this round |
        }
    }
}

console.log(allWindowsObject);

// try 4:
let tabsList = [];
count = 0; // approximately redeclared / restarted;

for (let windowIdCurrentIteration in listOfWindows) {
    for (let tab in tabs) {

    }
}

// then
// put all elements of list into one string:


let totalString = '';
for (let h=0; h<listOfWindowsOpen.length;h++) {
    for (let i=0; i<tabs.length; i++){
        let stringOfTabsInThisWindow = '';
        if (listOfWindowsOpen[h] == tabs[i].windowId) {
            stringOfTabsInThisWindow = stringOfTabsInThisWindow + '\n' + tabs[i].reference; // add line break between references for each tab in window
        }
        totalString += stringOfTabsInThisWindow + '\n'; // add line breaks between references for each tab in window
    }
    let linePerWindow = '____';
    totalString += linePerWindow;
}



console.log(totalString);

let superString = '';
let windowListOfTabs = [];
let allWindowsTabsObject = {};
for (let i = 0; i < listOfWindowsOpen.length ; i++) { // 0-2
    for (let j = 0; j <tabs.length; j++) {
        if (listOfWindowsOpen[i] == tabs[j].windowId) {
            windowListOfTabs.push(tabs[j].id);
        }
    } // push each tab-in-this-window to windowListOfTabs
    allWindowsTabsObject[listOfWindowsOpen[i]]=windowListOfTabs;
    windowListOfTabs = [];

}

// console.log(allWindowsTabsObject);

// Redo above list for object

let windowObjectOfTabs = {};
let allWindowsTabsObject3 = {};
for (let i = 0; i < listOfWindowsOpen.length ; i++) { // 0-2
    // console.log('listOfWindowsOpen[i] =',listOfWindowsOpen[i]); // the 3 window numbers
    for (let j = 0; j <tabs.length; j++) {

        for (let k = 0; k < Object.values(listOfWindowsOpen[i]).length;k++) {
            if (listOfWindowsOpen[i] == tabs[j].windowId) {
                windowObjectOfTabs[k] = tabs[j].id;
            }
        }

    } // push each tab-in-this-window to windowListOfTabs
    allWindowsTabsObject3[listOfWindowsOpen[i]]=windowObjectOfTabs;
    windowObjectOfTabs = [];
}

// get an object per window:
let allWTO2={};
for (let i = 0; i < listOfWindowsOpen.length ; i++) { // for each tab in the current window:
    for (let j = 0; j < tabs.length; j++) {
        let composite={};
        if (Object.keys(allWindowsTabsObject)[i] == tabs[j].windowId) {
            let thisWindow = tabs[j].windowId; // #
            let key = tabs[j].id;
            let value = tabs[j];
            composite = {key:value};
        }
    }
}

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
