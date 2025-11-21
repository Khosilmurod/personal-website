import * as fs from 'fs';
import * as path from 'path';
import { HTMLGenerator } from './htmlGenerator';
import { siteData } from './data';

// Personal website generator
console.log("🚀 Building personal website...");

const generator = new HTMLGenerator(siteData);

// Create dist directory if it doesn't exist
const distDir = path.join(process.cwd(), 'dist');
const blogDir = path.join(distDir, 'blog');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}
if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
}

// Write the main HTML file
const outputPath = path.join(distDir, 'index.html');
const html = generator.generateHTML();
fs.writeFileSync(outputPath, html, 'utf8');

// Generate blog posts
siteData.writing.forEach(writing => {
    const blogPostHtml = generator.generateBlogPost(writing);
    const blogPostPath = path.join(distDir, writing.url);
    fs.writeFileSync(blogPostPath, blogPostHtml, 'utf8');
    console.log(`📝 Generated blog post: ${writing.url}`);
});

// Generate individual pages
const pages = [
    { name: 'about', generator: () => generator.generateAboutPage() },
    { name: 'experience', generator: () => generator.generateExperiencePage() },
    { name: 'projects', generator: () => generator.generateProjectsPage() },
    { name: 'writing', generator: () => generator.generateWritingPage() }
];

pages.forEach(page => {
    const pageHtml = page.generator();
    const pagePath = path.join(distDir, `${page.name}.html`);
    fs.writeFileSync(pagePath, pageHtml, 'utf8');
    console.log(`📄 Generated page: ${page.name}.html`);
});

console.log(`✅ Website generated successfully!`);
console.log(`📁 Output: ${outputPath}`);
console.log(`🌐 Open ${outputPath} in your browser to view the site`);

// Export for potential use in other modules
export { HTMLGenerator, siteData };