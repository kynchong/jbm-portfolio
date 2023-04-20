import fs from 'fs'
import path from 'path'
import Portfolio from './components/portfolio';


// Get gallery items from public directory
function getGalleryItems() {
  const publicDirectory = './public/gallery-items'
  const items = fs.readdirSync(publicDirectory);
  const imageExtensions = ['.jpg', '.jpeg', '.webp', '.png', '.svg', '.tiff', '.bmp', '.ico','.png', '.gif']; // List of supported image file extensions

  return items.filter(item => {
    const ext = path.extname(item).toLowerCase(); // Get the extension of the file in lowercase
    return imageExtensions.includes(ext); // Return true if the extension is in the list of supported image extensions
  });
}

// Render gallery
export default function Home() {

  return <Portfolio items={getGalleryItems()} />

}