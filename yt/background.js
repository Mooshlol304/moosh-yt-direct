// Listen for when the user types 'yt' and presses Tab
chrome.omnibox.onInputEntered.addListener(() => {
  const url = "https://www.youtube.com";
  chrome.tabs.update({ url });
});
