import os from 'os';
import { sum } from './calculations'

console.log("sum: " + sum(1, 2));
console.log("userInfo: " + JSON.stringify(os.userInfo()));
