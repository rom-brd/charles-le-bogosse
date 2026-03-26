import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

// En production, servir les fichiers buildés
if (isProduction) {
  app.use(express.static(join(__dirname, 'dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
  });
} else {
  // En dev, proxy vers Vite
  app.get('/', (req, res) => {
    res.send(`
      <h1>Mode dev</h1>
      <p>Lance Vite séparément avec: <code>npx vite</code></p>
      <p>Ou va sur <a href="http://localhost:5173">http://localhost:5173</a></p>
    `);
  });
}

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  if (!isProduction) {
    console.log(`🔧 Dev mode: Run 'npx vite' to start the dev server`);
  }
});
