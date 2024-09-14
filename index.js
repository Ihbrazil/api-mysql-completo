import express from 'express';
import { retornaCampeonatos } from './servico/retornaCampeonatosServico.js';

const app = express();

app.get('/campeonatos', (req, res) => {
    const campeonatos = retornaCampeonatos();
    
    res.json(campeonatos);
});

app.listen(9000, async () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});