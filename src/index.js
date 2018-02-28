import os from 'os';
import fsNode from 'fs';
import { sum } from './calculations'

import Promise from 'bluebird';

import fetch from 'node-fetch';

// use async

async function showBitbucketStatus() {
    const statusResponse = await fetch('https://bqlf8qjztdtr.statuspage.io/api/v2/summary.json');
    const status = await statusResponse.json();
    console.log('Bitbucket status', status)
}

showBitbucketStatus();

// sync operation

console.log("sum: " + sum(1, 2));
console.log("userInfo: " + JSON.stringify(os.userInfo()));

// node modules as promise

const fs = Promise.promisifyAll(fsNode);

(async () => {
    const file = await fs.readFileAsync('./package.json')
        .delay(500);
    console.log('delayed file:', file.toString())
})();

const file = fs.readFileAsync('./package.json');
file.then(file => console.log(file.toString()));

console.log(file);