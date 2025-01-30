const express = require("express");
const app = express();
const port = 3000;

// middleware d'analyse du JSON les requêtes
app.use(express.json());

// Donnée
let produits = [
    {id: 1, nom: "Thé Vert Matcha", prix: 12.99, quantite: 10 },
    {id: 2, nom: "Café Arabica", prix: 8.99, quantite: 20 },
];

// ==== Routes ====
// GET /produits
// Liste des produits
app.get("/produits", (req,res) => {
    res.json(produits);
})

// POST
app.post("/produits", (req,res) => {
    const newProduits = req.body;
    if (!newProduits || !newProduits.id ||!newProduits.nom){
        return res.status(400).json({message:'Invalid produits data'});
    }
    produits.push(newProduits);
    res.status(200).json(produits);
})
// PUT

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Le serveur est démarre sur http://localhost:${port}`);
})

