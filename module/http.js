const http = require('http')
let categories = []

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<h1>Bu bosh sahifa</h1>')
        res.end()
    } else if (req.url === '/api/categories') {
        categories = ['Ish', 'Transport', 'Hayvonlar', 'Xizmatlar']
        res.write(JSON.stringify(categories))
        res.end()
    } else if (req.url === '/api/add') {
        res.write('<h1> Add new category </h1>')
        res.end('<form action="/api/add/category" method="POST"><label for="name">Category name</label><br> <input type="text" id="name" name="name"> <input type="text" id="id" name="id"> <input type="submit"> </form>')
    }

    if (req.method === 'POST') {
        if (req.url === '/api/add/category') {
            let body = []
            res.writeHead(200, {
                "Content-type": "text/html; charset=utf-8;"
            })
            req.on('data', (data) => {
                body = Buffer.from(data).toString()
            })
            req.on('end', () => {
                res.end('<h1> Sizning post so`rovingiz:</h1> ' + body)
            })
        }
    }
})

// server.on('connection', (socket) => {
//     console.log('Server connected');
// })

server.listen(3000, () => {
    console.log(`Server working on port ${server.address().port}`);
})