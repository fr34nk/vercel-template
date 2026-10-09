// import { config } from '../config/test.conf'

// import { firebaseHttpTransport } from './service/firebase.service'
import { firebaseHttpTransport } from './service/firebase.service.ts'

import fs from "node:fs";

// console.log('firebaseHttpTransport');
// console.log(firebaseHttpTransport);

// console.log('config');
// console.log(config);

firebaseHttpTransport.debug()


const dirs = fs.readdirSync('.')

console.log('dirs');
console.log(dirs);









