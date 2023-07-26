import styles from "@/styles/Questionario.module.css";
import QuestaoModel from "@/model/questao";
import Questao from "./Questao";
import Botoa from "./Botoa";

interface QuestionarioProps {
  questao: QuestaoModel | any;
  ultima: boolean;
  questaoRespondida: (questao: QuestaoModel) => void;
  irPraPrixomoPasso: () => void;
}

const Questionario = (props: QuestionarioProps) => {
  function respostaFornecida(indice: number) {
    if (props.questao.naoRespondida) {
      props.questaoRespondida(props.questao.responderCom(indice));
    }
  }

  return (
    <div className={styles.questionario}>
      {props.questao ? (
        <Questao
          valor={props.questao}
          tempoPraResposta={6}
          respostaFornecida={respostaFornecida}
          tempoEsgotado={props.irPraPrixomoPasso}
        />
      ) : (
        false
      )}
      <Botoa
        onClick={props.irPraPrixomoPasso}
        texto={props.ultima ? "Finalizar" : "Próxima"}
      />
    </div>
  );
};

export default Questionario;
