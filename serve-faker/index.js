const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: '*',
    credentials: true,
  })
);

app.options('*', cors());
app.use(bodyParser.json());

const FAKE_API_DIR = path.join(__dirname, 'jsons');

function generateFakeRoutes() {
  if (!fs.existsSync(FAKE_API_DIR)) {
    fs.mkdirSync(FAKE_API_DIR, { recursive: true });
    console.log(
      `Directorio "${FAKE_API_DIR}" no encontrado. Se ha creado automáticamente.`
    );
  }

  const files = fs
    .readdirSync(FAKE_API_DIR)
    .filter((file) => path.extname(file) === '.json');

  if (files.length === 0) {
    console.log(
      `El directorio "${FAKE_API_DIR}" está vacío. No hay archivos para generar rutas.`
    );
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(FAKE_API_DIR, file);
    const route = '/' + path.basename(file, '.json');

    app.get(route, (req, res) => {
      try {
        const jsonData = fs.readFileSync(filePath, 'utf8');
        res.json(JSON.parse(jsonData));
      } catch (err) {
        console.error(`Error al leer el archivo ${file}:`, err);
        res.status(500).json({ message: 'Error al leer el archivo' });
      }
    });

    console.log(`Ruta creada: ${route}`);
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

  const header = Buffer.from(
    JSON.stringify({ alg: 'HS256', typ: 'JWT' })
  ).toString('base64');
  const payload = Buffer.from(
    JSON.stringify({ tempToken, timestamp: Date.now() })
  ).toString('base64');
  const signature = 'fake-signature'; // Firma simulada
  const fakeJwt = `${header}.${payload}.${signature}`;

  setTimeout(() => {
    res.json({ fakeJwt });
  }, 3000);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
