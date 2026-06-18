const http = require('http');
const counterStore = require('./counterStore');

const PORT = 3000;

const server = http.createServer((req, res) => {
  counterStore.increment(); // Incrémente le compteur à chaque requête avant de vérifier l'URL
  if (req.method === 'GET' && req.url === '/ping') { 
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(req.headers)); //convertit objet JS en JSON et l'envoie dans la réponse
    } 
     //même chose mais pour stats 
        else if (req.method === 'GET' && req.url === '/stats') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(counterStore.getStats()));
        }
    else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});