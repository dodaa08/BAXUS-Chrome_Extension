// Listen for installation
chrome.runtime.onInstalled.addListener(() => {
  console.log('Honey Barrel extension installed');
});

// Handle any background tasks here
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'checkBaxusAPI') {
    // Add any background API checks or caching logic here
    sendResponse({ status: 'ok' });
  }
}); 