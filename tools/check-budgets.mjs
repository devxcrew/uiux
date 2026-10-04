import {readFileSync,statSync} from 'node:fs';
import {gzipSync} from 'node:zlib';
const root = new URL('../dist/',import.meta.url);
const manifest = JSON.parse(readFileSync(new URL('.vite/manifest.json',root),'utf8'));
const entries = Object.values(manifest).filter(asset => asset.isEntry);
const initial = new Set();
function visit(asset) {initial.add(asset.file);for(const dependency of asset.imports ?? []) visit(manifest[dependency]);}
entries.forEach(visit);
function compressed(file) {return gzipSync(readFileSync(new URL(file,root))).length;}
const entryBytes = [...initial].reduce((sum,file)=>sum+compressed(file),0);
const deferred = Object.values(manifest).filter(asset => !initial.has(asset.file) && asset.file.endsWith('.js'));
const maximumDeferred = Math.max(0,...deferred.map(asset=>compressed(asset.file)));
const entryLimit = 300 * 1024;
const deferredLimit = 480 * 1024;
console.log(`Gallery gzip JavaScript: initial ${entryBytes} / ${entryLimit} bytes, largest deferred ${maximumDeferred} / ${deferredLimit} bytes.`);
if(entryBytes>entryLimit || maximumDeferred>deferredLimit) throw new Error('Gallery bundle budget exceeded.');
for(const asset of Object.values(manifest)) if(statSync(new URL(asset.file,root)).size > 1600*1024) throw new Error(`Raw asset exceeds 1600 KiB: ${asset.file}`);

const cssBytes = entries.reduce((sum,asset) => sum + (asset.css ?? []).reduce((cssSum,file) => cssSum + compressed(file),0),0);
console.log(`Gallery initial gzip CSS: ${cssBytes} / 51200 bytes.`);
if(cssBytes>50*1024) throw new Error('Gallery CSS budget exceeded.');
