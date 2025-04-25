// Function to extract bottle information from the page
function extractBottleInfo() {
  const bottleInfo = {
    name: '',
    price: '',
    description: ''
  };

  // Common selectors for bottle information
  const selectors = {
    name: [
      'h1.product-title',
      '.product-name',
      '[itemprop="name"]',
      '.title'
    ],
    price: [
      '.price',
      '[itemprop="price"]',
      '.product-price',
      '.current-price'
    ],
    description: [
      '.product-description',
      '[itemprop="description"]',
      '.description'
    ]
  };

  // Try to find bottle name
  for (const selector of selectors.name) {
    const element = document.querySelector(selector);
    if (element) {
      bottleInfo.name = element.textContent.trim();
      break;
    }
  }

  // Try to find price
  for (const selector of selectors.price) {
    const element = document.querySelector(selector);
    if (element) {
      bottleInfo.price = element.textContent.trim();
      break;
    }
  }

  // Try to find description
  for (const selector of selectors.description) {
    const element = document.querySelector(selector);
    if (element) {
      bottleInfo.description = element.textContent.trim();
      break;
    }
  }

  return bottleInfo;
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'scanPage') {
    const bottleInfo = extractBottleInfo();
    sendResponse(bottleInfo);
  }
}); 