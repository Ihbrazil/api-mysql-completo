import express from 'express';
import { retornaCampeonatos, retornaCampeonatosID } from './servico/retornaCampeonatosServico.js';

const app = express();

app.get('/campeonatos', async (req, res) => {
    const campeonatos = await retornaCampeonatos();
    
    res.json(campeonatos);
});

app.get('/campeonatos/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    const campeonato = await retornaCampeonatosID(id);

    res.json(campeonato);
});

app.listen(9000, async () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});