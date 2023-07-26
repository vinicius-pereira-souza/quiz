import type { NextApiRequest, NextApiResponse } from "next";
import questaoes from "../bancoDeQuestoes";
import { embaralhar } from "@/functions/arrays";

export default function index(req: NextApiRequest, res: NextApiResponse) {
  const ids = questaoes.map((questao) => questao.id);

  res.status(200).json(embaralhar(ids));
}
