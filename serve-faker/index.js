const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: '*',
  credentials: true,
}));
app.options('*', cors());
app.use(bodyParser.json());

const FAKE_API_DIR = path.join(__dirname, 'jsons');

function createResponse(variableBody) {
  const now = new Date();
  const formattedDate = now.toISOString().replace('T', ' ').substr(0, 19);
  return {
    header: {
      idTransaccion: 'bdf5fd9c-bf6a-4d60-8086-a',
      idSesion: '124999519233026',
      codigo: 0,
      descripcion: 'OK',
      fechaHora: formattedDate
    },
    body: variableBody
  };
}

function validateRequestFormat(req, res, next) {
  const { header, body } = req.body || {};
  if (!req.body || typeof req.body !== 'object') {
    return res.status(400).json({ error: 'El cuerpo de la solicitud debe ser un objeto JSON.' });
  }
  if (!header || typeof header !== 'object') {
    return res.status(400).json({ error: 'La propiedad "header" es requerida y debe ser un objeto.' });
  }
  const requiredHeaderFields = ['idTransaccion', 'idSesion', 'fechaHora', 'usuario', 'canal', 'ip', 'dispositivo'];
  for (let field of requiredHeaderFields) {
    if (!header.hasOwnProperty(field)) {
      return res.status(400).json({ error: `El campo "${field}" en "header" es requerido.` });
    }
  }
  if (typeof header.idTransaccion !== 'string') {
    return res.status(400).json({ error: 'El campo "idTransaccion" debe ser un string.' });
  }
  if (typeof header.idSesion !== 'number') {
    return res.status(400).json({ error: 'El campo "idSesion" debe ser un número.' });
  }
  if (typeof header.fechaHora !== 'string') {
    return res.status(400).json({ error: 'El campo "fechaHora" debe ser un string con la fecha y hora.' });
  }
  if (typeof header.usuario !== 'string') {
    return res.status(400).json({ error: 'El campo "usuario" debe ser un string.' });
  }
  if (typeof header.canal !== 'string') {
    return res.status(400).json({ error: 'El campo "canal" debe ser un string.' });
  }
  if (typeof header.ip !== 'string') {
    return res.status(400).json({ error: 'El campo "ip" debe ser un string.' });
  }
  if (typeof header.dispositivo !== 'string') {
    return res.status(400).json({ error: 'El campo "dispositivo" debe ser un string.' });
  }
  if (!req.body.hasOwnProperty('body')) {
    return res.status(400).json({ error: 'La propiedad "body" es requerida.' });
  }
  if (body !== null && typeof body !== 'object') {
    return res.status(400).json({ error: 'La propiedad "body" debe ser un objeto o null.' });
  }
  next();
}

function generateFakeRoutes() {
  if (!fs.existsSync(FAKE_API_DIR)) {
    fs.mkdirSync(FAKE_API_DIR, { recursive: true });
  }
  const files = fs.readdirSync(FAKE_API_DIR).filter((file) => path.extname(file) === '.json');
  if (files.length === 0) {
    return;
  }
  files.forEach((file) => {
    const filePath = path.join(FAKE_API_DIR, file);
    const route = '/' + path.basename(file, '.json');
    app.get(route, (req, res) => {
      try {
        const jsonData = fs.readFileSync(filePath, 'utf8');
        const storedJson = JSON.parse(jsonData);
        res.json(createResponse(storedJson));
      } catch (err) {
        res.status(500).json({ message: 'Error al leer el archivo' });
      }
    });
  });
}

generateFakeRoutes();

app.post('/generateToken', (req, res) => {
  const { tempToken } = req.body;
  if (!tempToken) {
    return setTimeout(() => {
      res.status(400).json({ error: 'tempToken is required' });
    }, 3000);
  }
  const headerPart = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64');
  const payloadPart = Buffer.from(JSON.stringify({ tempToken, timestamp: Date.now() })).toString('base64');
  const signature = 'fake-signature';
  const fakeJwt = `${headerPart}.${payloadPart}.${signature}`;
  console.log('fakeJwt:', fakeJwt);
  setTimeout(() => {
    res.json({ fakeJwt });
  }, 3000);
});

app.get('/testGET', validateRequestFormat, (req, res) => {
  res.json(createResponse(req.body.body));
});

app.post('/testPOST', validateRequestFormat, (req, res) => {
  res.json(createResponse(req.body.body));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
