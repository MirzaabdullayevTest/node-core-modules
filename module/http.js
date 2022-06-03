const http = require('http')

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            // res.write('Hello from http')
            res.write('<h1> HEllo from http </h1>')
            // res.end('<p> This is end function </p>')
            res.end('<form action="/api/books/add" method="POST"> <label for="name">Book name</label> <br> <input type="text" id="name" name="name"> <br> <input type="submit"> </form>')
        }

        const books = ['Fact fullness', 'Atomic habits', 'Harry potter']

        if (req.url === '/api/books') {
            res.write(JSON.stringify(books))
            res.end()
        }
    }

    if (req.method === 'POST') {
        if (req.url === '/api/books/add') {
            const body = []

            res.writeHead(200, {
                'Content-type': 'text/html; charset=utf-8'
            })

            req.on('data', (data) => {
                body.push(Buffer.from(data))
            })

            req.on('end', () => {
                console.log(body.toString());
                console.log('END');
                res.end()
            })
        }
    }
})

// server.on('connection', (socket) => {
//     console.log('Connecting port', socket);
// })

server.listen(3000, () => {
    console.log('Server listening on port ', 3000);
})

