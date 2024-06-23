// Define a map of predefined colors and their hex codes
const colorMap = {
    'red': '#ff0000',
    'green': '#00ff00',
    'blue': '#0000ff',
    'yellow': '#ffff00',
    'cyan': '#00ffff',
    'magenta': '#ff00ff',
    'black': '#000000',
    'white': '#ffffff',
    'light blue': '#add8e6',
    'dark green': '#006400',
    // Add more two-word color names and their hex codes as needed
};

function convertColors() {
    const colorNamesInput = document.getElementById('colorInput').value.trim();
    
    // Check if the input is empty
    if (!colorNamesInput) {
        alert('Please enter at least one color name.');
        return;
    }

    // Convert to lowercase for case insensitivity and remove whitespace
    const colorNamesArray = colorNamesInput.split(',').map(name => name.trim().toLowerCase()); 
    
    // Filter out duplicates
    const uniqueColorNames = [...new Set(colorNamesArray)];
    
    const hexCodes = [];
    
    uniqueColorNames.forEach(colorName => {
        // Check if the exact color name exists in colorMap
        let hexCode = colorMap[colorName];
        
        // If not found, check if a similar color name with hyphens replaced by spaces exists
        if (!hexCode && colorName.includes('-')) {
            const spaceSeparatedName = colorName.replace('-', ' ');
            hexCode = colorMap[spaceSeparatedName];
        }
    
        // If not found, check if a similar color name with spaces replaced by hyphens exists
        if (!hexCode && !/^[a-z\s-]+$/.test(colorName)) {
            hexCodes.push({ name: colorName, hex: 'Not a Color' });
        } else if (hexCode) {
            hexCodes.push({ name: colorName, hex: 'Invalid Color' });
        } else {
            // If found, add the color name and its hex code to the hexCodes array
            hexCodes.push({ name: colorName, hex: hexCode });
        }
    });
    
    displayHexCodes(hexCodes);
}

function displayHexCodes(hexCodes) {
    const hexCodesDiv = document.getElementById('hexCodes');
    hexCodesDiv.innerHTML = '';
    
    // Display the color names and their hex codes
    hexCodes.forEach(item => {
        const p = document.createElement('p');
        p.textContent = `${item.name}: ${item.hex}`;
        hexCodesDiv.appendChild(p);
    });
}

module.exports = { convertColors };