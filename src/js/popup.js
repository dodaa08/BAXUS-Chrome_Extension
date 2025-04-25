document.addEventListener('DOMContentLoaded', () => {
  const resultsDiv = document.getElementById('results');
  
  // Function to fetch BAXUS listings
  async function fetchBaxusListings(query) {
    try {
      const response = await fetch(`https://services.baxus.co/api/search/listings?from=0&size=20&listed=true&query=${encodeURIComponent(query)}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching BAXUS listings:', error);
      return null;
    }
  }

  // Function to display results
  function displayResults(bottleInfo, baxusListings) {
    if (!bottleInfo.name) {
      resultsDiv.innerHTML = '<div class="error">No bottle information found on this page.</div>';
      return;
    }

    let html = '';
    
    if (baxusListings && baxusListings.length > 0) {
      baxusListings.forEach(listing => {
        const currentPrice = parseFloat(bottleInfo.price.replace(/[^0-9.]/g, ''));
        const baxusPrice = parseFloat(listing.price);
        const savings = currentPrice - baxusPrice;
        
        html += `
          <div class="result-item">
            <h3>${listing.name}</h3>
            <div class="price-comparison">
              <span>Current Price: $${currentPrice}</span>
              <span>BAXUS Price: $${baxusPrice}</span>
            </div>
            ${savings > 0 ? `<div class="savings">Potential Savings: $${savings.toFixed(2)}</div>` : ''}
            <a href="${listing.url}" class="baxus-link" target="_blank">View on BAXUS</a>
          </div>
        `;
      });
    } else {
      html = '<div class="no-results">No matching listings found on BAXUS.</div>';
    }

    resultsDiv.innerHTML = html;
  }

  // Main function to scan the page
  async function scanPage() {
    // Get the active tab
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    // Send message to content script
    chrome.tabs.sendMessage(tab.id, { action: 'scanPage' }, async (bottleInfo) => {
      if (bottleInfo && bottleInfo.name) {
        const baxusListings = await fetchBaxusListings(bottleInfo.name);
        displayResults(bottleInfo, baxusListings);
      } else {
        resultsDiv.innerHTML = '<div class="error">No bottle information found on this page.</div>';
      }
    });
  }

  // Start scanning when popup opens
  scanPage();
}); 