import fs from 'fs';
import path from 'path';

const optDir = path.join(process.cwd(), 'public', 'images', 'optimized');
const files = fs.readdirSync(optDir).filter(f => f.endsWith('.webp') && !f.includes('-thumb'));

const mappings = {
  'hero-crane': '20261002_083100.webp',
  'faun-crane': '20261002_083219.webp',
  'red-crane': '20261002_0831430.webp',
  'blue-crane': '20261002_083121.webp',
  'lathe': '20261002_082506.webp',
  'press': '20261002_082916.webp',
  'drill': '20261002_082730.webp',
  'rolling': '20261002_082847.webp'
};

const imagesJs = `export const imageManifest = [
${files.map(f => `  { filename: '${f}', caption: 'DAD Workshop Photo', category: 'workshop', focalPoint: 'center', isVertical: false }`).join(',\n')}
];
`;

fs.writeFileSync('src/data/images.js', imagesJs);

let contentJs = fs.readFileSync('src/data/content.js', 'utf-8');
contentJs = contentJs.replace('/images/optimized/hero-crane-100t.webp', '/images/optimized/' + mappings['hero-crane']);
contentJs = contentJs.replace('/images/optimized/workshop-hall.webp', '/images/optimized/' + mappings['press']);
contentJs = contentJs.replace('/images/optimized/cholet-lathe.webp', '/images/optimized/' + mappings['lathe']);
contentJs = contentJs.replace('/images/optimized/beyeler-press-brake-35-01.webp', '/images/optimized/' + mappings['press']);
contentJs = contentJs.replace('/images/optimized/vertical-slotter.webp', '/images/optimized/' + mappings['drill']);
contentJs = contentJs.replace('/images/optimized/raboma-radial-drill.webp', '/images/optimized/' + mappings['drill']);
contentJs = contentJs.replace('/images/optimized/faun-mobile-crane.webp', '/images/optimized/' + mappings['faun-crane']);
contentJs = contentJs.replace('/images/optimized/red-truck-crane.webp', '/images/optimized/' + mappings['red-crane']);
contentJs = contentJs.replace('/images/optimized/blue-white-truck-crane.webp', '/images/optimized/' + mappings['blue-crane']);

fs.writeFileSync('src/data/content.js', contentJs);
console.log('Fixed image paths');
