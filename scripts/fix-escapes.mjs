import fs from 'fs';

['src/components/Header.jsx', 'src/components/Hero.jsx'].forEach(f => {
  let s = fs.readFileSync(f, 'utf8');
  s = s.replace(/\\\`/g, '\`').replace(/\\\$/g, '$');
  fs.writeFileSync(f, s);
});
console.log('Done!');
