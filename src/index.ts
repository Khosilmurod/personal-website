import * as fs from 'fs';
import * as path from 'path';
import { HTMLGenerator } from './htmlGenerator';
import { siteData } from './data';

// Personal website generator
console.log("🚀 Building personal website...");

const generator = new HTMLGenerator(siteData);

// Create dist directory if it doesn't exist
const distDir = path.join(process.cwd(), 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Write the main HTML file with fractal tree
const outputPath = path.join(distDir, 'index.html');
const html = generator.generateV2HTML();
fs.writeFileSync(outputPath, html, 'utf8');

console.log(`✅ Website generated successfully!`);
console.log(`📁 Output: ${outputPath}`);
console.log(`🌐 Open ${outputPath} in your browser to view the site`);

// Export for potential use in other modules
export { HTMLGenerator, siteData };