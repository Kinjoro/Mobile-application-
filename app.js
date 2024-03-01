const http = require ('http')


const server = http.createServer(function(req, res)
{
    
    res.statusCode = 200
    res.setHeader ('Content Type', 'text/html')
    res.write ('<h1>Hello World!</h1>')
res.end ()
})
const port = process.env.port || 3000
server.listen (port, {})