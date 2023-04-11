import * as lunr from 'lunr';

// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

appDiv.innerHTML = `
This is based on <a href="https://lunrjs.com/guides/getting_started.html">Getting Started: lunr</a> but the TypeScript version is quite different (but don't worry about that).
`;

function prtt(s) {
  appDiv.innerHTML += '<br><br>' + JSON.stringify(s);
}

const documents = [
  {
    name: 'Lunr',
    text: 'Like Solr, but much smaller, and not as bright.',
  },
  {
    name: 'React',
    text: 'A JavaScript library for building user interfaces.',
  },
  {
    name: 'Lodash',
    text: 'A modern JavaScript utility library delivering modularity, performance & extras.',
  },
];

const builder = new lunr.Builder();
builder.ref('name');
builder.field('text');

documents.forEach((i) => builder.add(i));

const idx = builder.build();

// prtt({idx})

// const results0 = idx.search('bright'); // should return 0 results
// const results1 = idx.search('bright.'); // should return 1 result
// const results2 = idx.search('mod*'); // should return 1 result

// prtt('Length of res: ' + results0.length);
// prtt('Length of res: ' + results1.length);
// prtt('Length of res: ' + results2.length);

const results1 = idx.search('mod');
const results2 = idx.search('mod*');
var res1 = 0;
var res2 = 0;
prtt({ results1, results2 });
if (results1.length > 0) {
  res1 = results1[0].matchData.metadata;
}

prtt(Object.keys(res1).length);
var res2 = results2[0].matchData.metadata;
prtt(Object.keys(res2).length);
