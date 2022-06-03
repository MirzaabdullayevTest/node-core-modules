const fs = require('fs') // file system
// console.log(fs);
const path = require('path')

// Papka yaratish
// fs.mkdir(path.join(__dirname, '..', 'test'), (err) => {
//     if (err) console.log(err);
// })

// Papka o'chirish
// fs.rmdir(path.join(__dirname, '..', 'test'), (err) => {
//     if (err) console.log(err);
// })

// fs.mkdir(path.join(__dirname, '..', 'test'), (err) => {
//     if (err) console.log(err);
// })

// fs.rmdir(path.join(__dirname, '..', 'test'), (err) => {
//     if (err) console.log(err);
// })

// Papkani nomini o'zgartirish
// fs.rename(
//     path.join(__dirname, '..', 'renamed'),
//     path.join(__dirname, '..', 'newName'),
//     (err) => {
//         if (err) console.log(err);
//         else {
//             console.log('Directory renamed');
//         }
//     })

// fs.mkdir(path.join(__dirname, '..', 'test'), (err) => {
//     if (err) console.log(err);
//     else {
//         console.log('Directory created');

//         setTimeout(() => {
//             fs.rename(
//                 path.join(__dirname, '..', 'test'),
//                 path.join(__dirname, '..', 'T_EST'),
//                 (err) => {
//                     if (err) console.log(err);
//                     else {
//                         console.log('Directory renamed');
//                     }
//                 })
//         }, 2000)
//     }
// })

// papka yaratamiz // 3 sekund da nomini o'zgartiramiz // 2 o'chiramiz
// fs.mkdir(path.join(__dirname, '..', 'test'), (err) => {
//     if (err) console.log(err);
//     else {
//         console.log('Dir created');
//         setTimeout(() => {
//             fs.rename(
//                 path.join(__dirname, '..', 'test'),
//                 path.join(__dirname, '..', 'newTest'), (err) => {
//                     if (err) console.log(err);
//                     else {
//                         console.log('Dir renamed succussfully');
//                         setTimeout(() => {
//                             fs.rmdir(
//                                 path.join(__dirname, '..', 'newTest'), (err) => {
//                                     if (err) console.log(err);
//                                     else {
//                                         console.log('Dir removed succussfully');
//                                     }
//                                 })
//                         }, 5000);
//                     }
//                 })
//         }, 3000);
//     }
// })

// fayl yaratish
// fs.writeFile(
//     path.join(__dirname, '..', 'text.txt'), 'Hello world',
//     (err) => {
//         if (err) console.log(err);
//         else {
//             console.log('File created');
//         }
//     })

// fayl nomini o'zgartish
// fs.rename(
//     path.join(__dirname, '..', 'text.txt'),
//     path.join(__dirname, '..', 'new.txt'),
//     (err) => {
//         if (err) console.log(err);
//         else {
//             console.log('File renamed');
//         }
//     })

// fs.unlink(
//     path.join(__dirname, '..', 'new.txt'),
//     (err) => {
//     if (err) console.log(err);
//     else {
//         console.log('File removed');
//     }
// })

// fs.appendFile(path.join(__dirname, '..', 'script.js'), '// from fs module', (err) => {
//     if (err) console.log(err);
//     else {
//         console.log('Data added');
//     }
// })

// bitta papka public // style // style.css

// fs.mkdir(path.join(__dirname, '..', 'public'), (err) => {
//     if (err) console.log(err);
//     else {
//         console.log('Public folders created');
//         fs.mkdir(path.join(__dirname, '..', 'public', 'style'),
//             (err) => {
//                 if (err) console.log(err);
//                 else {
//                     console.log('Style folder created');
//                     fs.writeFile(
//                         path.join(__dirname, '..', 'public', 'style', 'style.css'),
//                         '//Hello from fs',
//                         (err) => {
//                             if (err) console.log(err);
//                             else {
//                                 console.log('File created');
//                             }
//                         })
//                 }
//             })
//     }
// })

// setTimeout(() => {
//     fs.mkdir(path.join(__dirname, '..', 'public'), (err) => {
//         if (err) {
//             return console.log(err);
//         }

//         console.log('Public folder created');
//     })
// }, 1000);

// setTimeout(() => {
//     fs.mkdir(path.join(__dirname, '..', 'public', 'style'), (err) => {
//         if (err) {
//             return console.log(err);
//         }

//         console.log('Style folder created');
//     })
// }, 2000);

// setTimeout(() => {
//     fs.writeFile(path.join(__dirname, '..', 'public', 'style', 'style.css'), '/* Hello from fs */',
//         (err) => {
//             if (err) {
//                 return console.log(err);
//             }

//             console.log('Style file created');
//         })
// }, 3000);

// File o'qish
// fs.readFile(
//     path.join(__dirname, '..', 'public', 'style', 'style.css'),
//     'utf-8'
//     ,
//     (err, data) => {
//         if (err) console.log(err);
//         else {
//             console.log(data);
//         }
// })