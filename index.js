import express from 'express';
import { retornaCampeonatos, retornaCampeonatosAno, retornaCampeonatosID } from './servico/retornaCampeonatosServico.js';

const app = express();

app.get('/campeonatos', async (req, res) => {
    let campeonatos;

    const ano = req.query.ano;

    if (typeof ano === "undefined") {
        campeonatos = await retornaCampeonatos();
    } else {
        campeonatos = await retornaCampeonatosAno(parseInt(ano));
    }

    if (campeonatos.length > 0) {
        res.json(campeonatos);
    } else {
        res.status(404).json({mensagem: "Nenhum campeonato encontrado"});
    }
});

app.get('/campeonatos/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    const campeonato = await retornaCampeonatosID(id);

    if (campeonato.length > 0) {
        res.json(campeonato);
    } else {
        res.status(404).json({mensagem: "Nenhum campeonato encontrado"});
    }
});

app.listen(9000, async () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});