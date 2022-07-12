import "./featured.scss"
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import "../../components/ResumeItem"


const Featured = ({ custoProduto }) => {
  return (
    <>
      <div className="featured">
        <div className="top">
          <h1 className="title">Rendimento Total</h1>
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar value={28.57} text={"28.57%"} strokeWidth={5} />
          </div>
          <p className="title">Seus Rendimentos</p>
          <p className="amount">R$ 12.450,00</p>
          <p
            className="desc">Aqui você pode ter um melhor controle sobre o seu empreendimento.
          </p>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Meta</div>
              <div className="itemResult neutro">
                <div className="resultAmount">R$ 3.150,00</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Este mês</div>
              <div className="itemResult negative">
                <div className="resultAmount">R$ 900,00</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Mês Anterior</div>
              <div className="itemResult neutro">
                <div className="resultAmount">R$ 2.250,00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Featured