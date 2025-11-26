// const readline = require('readline');
// const fs = require('fs');
// const http = require('http');
// const url = require('url');
// const events = require('events');




// custom module
// const replaceHtml = require('../Modules/replaceHtml');
// const user = require('../Modules/user');
// const data = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// data.question("Enter you age: ", (age) => {
//     console.log("Age: " + age);
//     data.close();
// // })
// data.on('close', () => {
//     console.log('Interface Closed!');
//     process.exit(0);
// })

//Reading and Writing of a File


//*****Synchronous*****
// const readFile = fs.readFileSync('../Files/index.txt', 'utf-8');
// console.log(readFile);
// let content = `This is the data written from input.txt:  ${readFile} \n Date : ${new Date()} `
// const writeFile = fs.writeFileSync('../Files/output.txt', `${content}`);
// console.log(writeFile);



/*********  Asynchronous   ********/
// fs.readFile('../Files/index.txt', 'utf-8', (error1, data1) => {
//     console.log(data1);
//     fs.readFile("../Files/append.txt", 'utf-8', (error2, data2) => {
//         console.log("Data 2: ", data2);
//         fs.writeFile(`../Files/output.txt`, `${data1} \n\n ${data2} \n\n 'Date: ' ${new Date()}`, () => {
//             console.log("File Written Successfully")
//         })
//     })


// })
// console.log('Reading Files ..........');



/* Creating a web server */

// step1: create a server

// const server = http.createServer((request, response) => {
//     response.end("Hello From the Server");
//     console.log('Server created.............');
//     // console.log(request)
// })




// step2: start a server

// server.listen(8000, '127.0.0.1', () => {
//     console.log('Server has started..........')
// })


// Sending an html file as a response

// const file = fs.readFileSync('../Template/index.html', 'utf-8');

// const createServer = http.createServer((request, response) => {
//     console.log('Server created........');

// })
// createServer.listen(8000, '127.0.0.1', () => {
//     console.log('Server has Started....');
// })




//************** Routing  **********************/
// const file = fs.readFileSync('../Template/index.html', 'utf-8');
// const productList = fs.readFileSync('../Template/product-list.html', 'utf-8');
// const productDetail = fs.readFileSync('../Template/product-detail.html', 'utf-8');
// const products = JSON.parse(fs.readFileSync('../Data/products.json', 'utf-8'));


// const createServer = http.createServer((request, response) => {
//     console.log('Server created........');
//     let { query, pathname: path } = url.parse(request.url, true);

//     // let path = request.url;
//     if (path === "/" || path.toLowerCase() === "/home") {
//         response.writeHead(200, {
//             'content-Type': 'text/html'
//         });
//         let productArray = products.map((prod) => {
//             return replaceHtml(productList, prod);

//         })

//         response.end(file.replace('{{%content%}}', productArray.join('')));

//     } else if (path.toLowerCase() === "/contact") {
//         response.writeHead(200);
//         response.end(file.replace('{{%content%}}', 'This is a contact page'));
//     } else if (path.toLowerCase() === "/about") {
//         response.writeHead(200);

//         response.end(file.replace('{{%content%}}', 'This is a about page'))
//     } else if (path.toLowerCase() === "/products") {
//         response.writeHead(200);
//         if (!query.ID) {

//             let productArray = products.map((prod) => {
//                 return replaceHtml(productList, prod);

//             })

//             response.end(file.replace('{{%content%}}', productArray.join('')));

//         } else {
//             let eachProduct = products[query.ID];
//             let productDetailHtml = replaceHtml(productDetail, eachProduct);
//             console.log(productDetailHtml)
//             response.end(file.replace('{{%content%}}', productDetailHtml))
//         }

//     } else {
//         response.writeHead(404);
//         response.end(file.replace('{{%content%}}', 'Error 404: Page Not Found'));
//     }

// })
// createServer.listen(8000, '127.0.0.1', () => {
//     console.log('Server has Started....');
// })




//Emmitting and Handling Custom Events
// let myEmitter = new user();
// myEmitter.on('User-Created', (id, name) => {
//     console.log(`A new user ${name} has been created !`)
// })
// myEmitter.emit('User-Created', 45, 'Aman');



// Streams

// const server = http.createServer();
// server.listen(8000, '127.0.0.1', () => {
//     console.log('Server has Started....');
// })

// server.on('request', (req, res) => {
//     fs.readFile('../Files/largeFile.txt', (err, data) => {
//         if (err) {
//             res.end("Error Occured........");
//         }
//         res.end(data);
//     })
// })



// Readable Stream
// const server = http.createServer();
// server.listen(8000, '127.0.0.1', () => {
//     console.log('Server has Started....');
// })

// server.on('request', (req, res) => {
//     let rs = fs.createReadStream('../Files/largeFile.txt');
//     rs.on('data', (chunk) => {
//         res.write(chunk);
//     })
//     rs.on('end', () => {

//         res.end();
//     })
//     rs.on('error', (err) => {
//         res.end(err.message);
//     })
// })



// Pipe


// const server = http.createServer();
// server.listen(8000, '127.0.0.1', () => {
//     console.log('Server has Started....');
// })

// server.on('request', (req, res) => {
//     let rs = fs.createReadStream('../Files/largeFile.txt');
//     rs.pipe(res);
// })



//Event Loop

// console.log('App Started');
// setTimeout(() => {
//     console.log('App callback executed');
// }, 0);
// setImmediate(() => {
//     console.log('SetImmediate Callback Executed')
// })
// console.log('App Closed');



//---------------------------------------------------------------

// To Read The Input From Terminal
// let read = require('readline');
// const interface = read.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// interface.question("Whats Your name ", (name) => {
//     console.log("Name:", name)
//     interface.close()
// });
// interface.on('close', () => {
//     console.log("Interface Closed ....... !")
//     process.exit(0)
// })


// File Read & Write

// Synchronous Read and Write

// let fs = require('fs');
// const readFile = fs.readFileSync("../Files/index.txt", 'utf-8');
// console.log(readFile);

// const writeFile = fs.writeFileSync("../Files/output.txt", `This is the content added from the app.js ${new Date()} `)
// console.log(writeFile);

// Asynchronous Read and write

// let fs = require("fs");
// fs.readFile("../Files/index.txt", 'utf-8', (data, err) => {
//     console.log(data);
//     console.log(err);
// })

// fs.writeFile("../Files/output.txt", "This is added using async file write...", () => {
//     console.log('File write Finished')
// })


// Server Creation
// let http = require('http');
// const server = http.createServer((request, response) => {
//     console.log("A new Server Created")
//     response.end("Hello From the Server")
// });

// server.listen(8000, '127.0.0.1', () => {
//     console.log("Server Started")
// })


// Read Html File
let fs = require("fs");
let readHtml = fs.readFileSync("../Template/index.html", "utf-8");

let http = require('http');
const server = http.createServer((request, response) => {
    console.log("A new Server Created");
    let path = request.url;
    if (path === "/" || path.toLowerCase() === "/home") {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.end(readHtml.replace("{{%content%}}", "You are currently in Home Page"));
    } else if (path.toLowerCase() === "/about") {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });

        response.end(readHtml.replace("{{%content%}}", "You are currently in About Page"));
    } else if (path.toLocaleLowerCase() === "/contact") {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });

        response.end(readHtml.replace("{{%content%}}", "You are currently in Contact Page"));
    } else if (path.toLocaleLowerCase() === "/products") {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });

        response.end(readHtml.replace("{{%content%}}", "You are currently in Product Page"));
    } else {
        response.writeHead(400);

        response.end("404:  Error Not Found")
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log("Server Started")
})

