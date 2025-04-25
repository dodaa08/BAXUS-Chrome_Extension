# Honey Barrel Chrome Extension

A Chrome extension that helps whisky and wine enthusiasts find better deals by comparing prices with the BAXUS marketplace.

## Features

- Automatically detects bottle information on retail websites
- Compares prices with BAXUS marketplace listings
- Shows potential savings
- Provides direct links to BAXUS alternatives

## Installation

1. Clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory

## Usage

1. Visit any supported retail website
2. Click the Honey Barrel extension icon
3. The extension will automatically scan the page for bottle information
4. View price comparisons and potential savings
5. Click on BAXUS links to view alternatives

## Development

### Project Structure

```
├── manifest.json
├── src/
│   ├── popup.html
│   ├── css/
│   │   └── popup.css
│   ├── js/
│   │   ├── content.js
│   │   ├── popup.js
│   │   └── background.js
│   └── images/
│       ├── icon16.png
│       ├── icon48.png
│       └── icon128.png
```

### Building

1. Make changes to the source files
2. Reload the extension in Chrome
3. Test the changes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License 