const fs = require('fs');
const path = require('path');

const projectDir = __dirname;
const cssPath = path.join(projectDir, 'assets', 'css', 'style.css');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];
    files.forEach(function (file) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== '.git' && file !== 'node_modules') {
                arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
            }
        } else {
            if (file.endsWith('.html') || file.endsWith('.js')) {
                arrayOfFiles.push(fullPath);
            }
        }
    });
    return arrayOfFiles;
}

const files = getAllFiles(projectDir);

let cssContent = fs.readFileSync(cssPath, 'utf8');

// 1. Remove comments
cssContent = cssContent.replace(/\/\*[\s\S]*?\*\//g, '');

// 2. Remove strings
cssContent = cssContent.replace(/"[^"]*"/g, '""').replace(/'[^']*'/g, "''");

// 3. Extract potential classes and IDs
const classRegex = /\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)/g;
const idRegex = /#([_a-zA-Z]+[_a-zA-Z0-9-]*)/g;

let classes = new Set();
let ids = new Set();

let match;
while ((match = classRegex.exec(cssContent)) !== null) {
    classes.add(match[1]);
}

while ((match = idRegex.exec(cssContent)) !== null) {
    const id = match[1];
    // Filter hex colors (3, 4, 6, 8 hex digits)
    if (!/^[0-9a-fA-F]{3,8}$/.test(id)) {
        ids.add(id);
    }
}

// 4. Scan files
let usedClasses = new Set();
let usedIds = new Set();

// Pre-read all file contents to avoid re-reading
const fileContents = files.map(f => fs.readFileSync(f, 'utf8'));

// Check classes
classes.forEach(cls => {
    for (const content of fileContents) {
        if (content.includes(cls)) {
            usedClasses.add(cls);
            break;
        }
    }
});

// Check IDs
ids.forEach(id => {
    for (const content of fileContents) {
        if (content.includes(id)) {
            usedIds.add(id);
            break;
        }
    }
});

// 5. Report
const unusedClasses = [...classes].filter(c => !usedClasses.has(c));
const unusedIds = [...ids].filter(i => !usedIds.has(i));

console.log('--- UNUSED CLASSES ---');
unusedClasses.forEach(c => console.log('.' + c));

console.log('--- UNUSED IDS ---');
unusedIds.forEach(i => console.log('#' + i));
