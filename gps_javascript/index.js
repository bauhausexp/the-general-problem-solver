var fs = require('fs');
import { gps } from './gps';

var example = JSON.parse(fs.readFileSync('examples/monkeys.json', 'utf8'));

console.log('Running the "monkeys" example');
console.log('-----------------------------'); 

gps(example.start, example.finish, example.ops);
