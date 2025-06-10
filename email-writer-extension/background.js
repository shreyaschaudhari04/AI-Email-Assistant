const appUrl = "https://smart-email-assist.netlify.app";

chrome.action.onClicked.addListener(() => {
  chrome.windows.create({
    url: appUrl,
    type: "popup",
    width: 500,
    height: 800,
    top: 100
  });
});


// chrome.action.onClicked.addListener(() => {
//   chrome.system.display.getInfo((displays) => {
//     const primaryDisplay = displays.find(display => display.isPrimary) || displays[0];
//     const screenWidth = primaryDisplay.workArea.width;

//     chrome.windows.create({
//       url: appUrl,
//       type: "popup",
//       width: 500,
//       height: 800,
//       left: screenWidth - 500,
//       top: 100,
//     });
//   });
// });



