const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let updated = false;

            // Fix checked="" -> defaultChecked
            const p1 = content.replace(/checked=""/g, 'defaultChecked');
            if (p1 !== content) { content = p1; updated = true; }

            // General replacement for `style="..."` that didn't match the specific ones
            // I'll grab any `style="anything"` and convert it to style={{...}}
            // Be careful to parse standard CSS string to object.
            // But since these are mostly simple like `style="font-variation-settings: 'FILL' 1;"`, I can regex them.
            const styleRegex = /style="([^"]+)"/g;
            let p2 = content;
            let match;
            while ((match = styleRegex.exec(content)) !== null) {
               let styleStr = match[1];
               let styleObj = {};
               let pairs = styleStr.split(';').filter(Boolean);
               for (let pair of pairs) {
                  let [key, val] = pair.split(':');
                  if (key && val) {
                      key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                      let cleanVal = val.trim();
                      if (!isNaN(cleanVal) && cleanVal !== '') {
                          // keep string since React accepts "14px" and some accept numbers, but strings are safe
                          cleanVal = `"${cleanVal}"`;
                      } else {
                          // escape inner quotes
                          cleanVal = cleanVal.replace(/"/g, '\\"');
                          cleanVal = `"${cleanVal}"`;
                      }
                      styleObj[key] = cleanVal;
                  }
               }
               let styleObjStr = Object.entries(styleObj).map(([k, v]) => `${k}: ${v}`).join(', ');
               p2 = p2.replace(match[0], `style={{ ${styleObjStr} }}`);
               updated = true;
            }
            if (updated) {
                fs.writeFileSync(fullPath, p2);
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

processDir(path.join(__dirname, 'src'));
console.log('Done');
