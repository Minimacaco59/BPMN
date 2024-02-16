const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Définition des options Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Concur Note de Frais',
      version: '1.0.0',
      description: 'Documentation de votre API Note de Frais',
    },
  },
  apis: ['./app.js'], // Chemin vers votre fichier app.js ou vos routes
};

// Génération du swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

// Utilisation de Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * components:
 *   schemas:
 *     NoteDeFrais:
 *       type: object
 *       properties:
 *         idEmployee:
 *           type: integer
 *         idNoteDeFrais:
 *           type: integer
 *         depensedescription:
 *           type: string
 *         depenseType:
 *           type: boolean
 *         depenseMontant:
 *           type: number
 *         verifier:
 *           type: boolean
 *         soumis:
 *           type: boolean
 *         valider:
 *           type: boolean
 *         integer:
 *           type: boolean
 *         rejeter:
 *           type: boolean
 */

/**
 * @swagger
 * /api/notedefrais:
 *   post:
 *     summary: API qui simule la vérification de certaines règles métier . Ici, on vérifie que le montant est différent de 0.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NoteDeFrais'
 *     responses:
 *       200:
 *         description: Note de Frais créée avec succès
 */
app.post('/api/notedefrais', (req, res) => {
  const notedefrais = req.body;

  
  console.log('Reçu un JSON notedefrais :', notedefrais);

  
  notedefrais.verifier = notedefrais.depenseMontant !== null && notedefrais.depenseMontant !== 0;

  
  res.json(notedefrais);
});

/**
 * @swagger
 * /api/SAP:
 *   post:
 *     summary: Vérifie si l'utilisateur est bien connu dans SAP. Si oui, met la variable 'intégrer' à vrai.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NoteDeFrais'
 *     responses:
 *       200:
 *         description: Succès
 *       400:
 *         description: Mauvaise Requête
 */
app.post('/api/SAP', (req, res) => {
  const notedefrais = req.body;

  // Vérifier si idEmployee est égal à 301
  if (notedefrais.idEmployee === 301) {
    // Modifier la valeur de integer à true
    notedefrais.integer = true;
  }

  res.json(notedefrais);
});

app.listen(port, () => {
  console.log(`Serveur API REST écoutant sur http://localhost:${port}`);
});
