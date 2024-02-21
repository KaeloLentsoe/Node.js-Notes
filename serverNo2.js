
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to the decentralized server. Take some courses with us!!!');
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify(['Decentralized finance', 'Basic programming', 'Blockchain technology']));
        res.end();
}
});

server.listen(3000);

console.log('Listening on port 3000...');