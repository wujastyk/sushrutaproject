import Config from './config.mjs';
import Fs from 'fs';
import Path from 'path';
import Jsdom from 'jsdom';

const xpathOne = (path,par) => {
    const res = par.ownerDocument.evaluate(path,par,null,8,null);
    return res.singleNodeValue;
};

const readFile = (str) => {
    const f = Fs.readFileSync(str,{encoding: 'utf-8'});
    const dom = new Jsdom.JSDOM('');
    const parser = new dom.window.DOMParser();
    const preamble = `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="${Config.xslt}"?>`;
    return parser.parseFromString(preamble+f,'text/xml');
};

const concatFiles = (arr) => {
    const fs = arr.map(readFile);
    const first = fs.shift();
    const firstbody = first.querySelector('text body');
    for(const f of fs) {
        const body = f.querySelector('text body');
        while(body.firstChild)
            firstbody.appendChild(body.firstChild);
    }
    return first;
};

for(const file of Config.files) {
    const xml = Array.isArray(file.input) ?
        concatFiles(file.input) :
        readFile(file.input);
    const metae = file.meta || [];
    for(const meta of metae) {
       const el = xpathOne(meta[0],xml.documentElement);
       el.innerHTML = '';
       el.append(meta[1]);
    }
    const serial = (new (new Jsdom.JSDOM('')).window.XMLSerializer()).serializeToString(xml);
    const dir = Path.dirname(file.output);
    if(!Fs.existsSync(dir)) Fs.mkdirSync(dir,{recursive: true});
    Fs.writeFileSync(file.output, serial);
}
