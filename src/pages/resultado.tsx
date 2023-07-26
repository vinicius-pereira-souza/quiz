import Estatistica from "@/components/Estatistica";
import styles from "@/styles/Resultado.module.css";
import Botoa from "@/components/Botoa";
import { useRouter } from "next/router";

const Resultado = () => {
  const router = useRouter();

  const total: number = +`${router.query.total}`;
  const certas: number = +`${router.query.certas}`;
  const percentual: number = Math.round((certas / total) * 100);

  return (
    <div className={styles.resultado}>
      <h1>Resultado Final</h1>
      <div style={{ display: "flex" }}>
        <Estatistica texto="Perguntas" valor={total} />
        <Estatistica texto="Certas" valor={certas} corFundo="#9cd2a4" />
        <Estatistica
          texto="Percentual"
          valor={`${percentual}%`}
          corFundo="#de6a33"
        />
      </div>
      <Botoa href="/" texto="Tentar Novamente" />
    </div>
  );
};

export default Resultado;
