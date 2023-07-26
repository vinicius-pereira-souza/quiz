import type { NextApiRequest, NextApiResponse } from "next";

import questaoes from "../bancoDeQuestoes";

export default function questoes(req: NextApiRequest, res: NextApiResponse) {
  let idSelecionado: any;

  if (req.query.id) {
    idSelecionado = +req.query.id;
  }

  const unicaQuestaoOuNada = questaoes.filter(
    (questao) => questao.id === idSelecionado,
  );

  if (unicaQuestaoOuNada.length === 1) {
    const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas();

    res.status(200).json(questaoSelecionada.paraObjeto());
  } else {
    res.status(204).send("");
  }
}
