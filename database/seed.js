const db = require('./index.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// const initData = require('./seed.json')
const fs = require('fs');
const writerStream = fs.createWriteStream('data.csv');
// const readerStream = fs.createReadStream('data.txt');
// const initData = [];
const startTime = Date.now();
console.log(startTime);
function writeOneMillion(qty, writerStream, data, encoding, callback) {
  let i = qty;
  write();
  function write() {
    let ok = true;
    do {
      let myData = data();
      let obj = {
        id: i,
        title: `"${myData.title}"`,
        location: `"${myData.location}"`,
        urls: '"{' + myData.urls + '}"'
        // urls: myData.urls
      };
      // create a str joining all the values in the obj in one line
      let str = Object.values(obj).join(',') + '\n';
      // let temp = Object.values(obj);
      // let str = temp.substring(1, temp.length - 1) + '\n';
      //create the header for the csv file at first run
      if (i === qty) {
        writerStream.write('id, title, location, urls \n', 'UTF8', callback);
      }
      // str = JSON.stringify(obj);
      i -= 1;
      if (i === 0) {
        writerStream.write(str, encoding, callback);
      } else {
        ok = writerStream.write(str, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writerStream.once('drain', write);
    }
  }
}

//function that creates random data info and random amount of pictures
let data = () => {
  const noun = [
    'Home',
    'Flat',
    'Apartment',
    'Suite',
    'Loft',
    'Cottage',
    'Townhouse',
    'Condo',
    'Bungalow',
    'Retreat',
    'House',
    'Castle',
    'Mansion'
  ];
  const adjective = [
    '',
    'Beautiful',
    'Cozy',
    'Convenient',
    'Magical',
    'Private',
    'Vintage',
    'Charming',
    'Themed',
    'Modern',
    'Luxurious',
    'Getaway',
    'Quaint',
    'Hilltop',
    'Scenic',
    'Picturesque',
    'Comfy'
  ];
  const locations = [
    'Los Angeles',
    'Glendale',
    'Marina del Rey',
    'Hollywood',
    'Hawthorne',
    'Pasadena',
    'Inglewood',
    'Compton',
    'Koreatown',
    'Westchester',
    'Bel-Air',
    'Beverley Hills',
    'West LA',
    'Santa Monica',
    'Venice',
    'Malibu'
  ];
  const urls = [
    // `\'https://loremflickr.com/720/640/house\'`,
    // `\'https://loremflickr.com/320/240/house\'`,
    // `\'https://loremflickr.com/520/440/house\'`,
    // `\'https://loremflickr.com/420/340/house\'`,
    // `\'https://loremflickr.com/620/540/house\'`,
    // `\'https://loremflickr.com/645/530/house\'`
    'https://loremflickr.com/720/640/house',
    'https://loremflickr.com/320/240/house',
    'https://loremflickr.com/520/440/house',
    'https://loremflickr.com/420/340/house',
    'https://loremflickr.com/620/540/house',
    'https://loremflickr.com/645/530/house'
  ];

  return {
    title:
      adjective[Math.floor(Math.random() * 17)] +
      ' ' +
      noun[Math.floor(Math.random() * 13)],
    location: locations[Math.floor(Math.random() * 17)],
    urls: urls.slice(0, Math.floor(Math.random() * 6) + 5)
  };
};

writeOneMillion(1e7, writerStream, data, 'UTF8', () =>
  console.log('write stream done')
);

console.log(Date.now() - startTime);

// for (let i = 0; i < 10000000; i++) {
//   writerStream.write(
//     `{
//     id: ${i},
//     urls: [
//       'https://loremflickr.com/720/640/house',
//       'https://loremflickr.com/320/240/house',
//       'https://loremflickr.com/520/440/house',
//       'https://loremflickr.com/420/340/house',
//       'https://loremflickr.com/620/540/house'
//     ]
//   }`,
//     `UTF8`
//   );
//   if (i % 1000000 === 0) console.log(i);
// }

// writerStream.write(data, 'UTF8');
// writerStream.end();

// writerStream.on('finish', () => {
//   console.log('Writing Completed');
// });

// writerStream.on('error', err => {
//   console.log(err.stack);
// });

// console.log('Streaming Ended');

// const readerStream = fs.createReadStream('data.txt');
// const writerStream = fs.createWriteStream('./data2.txt');
// readerStream.pipe(writerStream);
// console.log('Piping ended');

// readerStream
//   .pipe(db.insertMany(readerStream))
//   .then(() => mongoose.connection.close());
// console.log('piping ended');
// db.insertMany(readerStream).then(() => mongoose.connection.close());
