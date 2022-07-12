import './cta.css'
import ImgCTA from '../../../images/imagem-cta.png'
import { Link } from 'react-router-dom';

export function Cta() {
    return (
        <main className='main-landing'>
            <section className='section-cta'>

                <div className='div-cta'>
                    <h1 className='titulo-cta'>Já pensou em construir <br /> <span className='span-titulo-cta'>seu próprio </span> negócio?</h1>
                    <p>Nós da empresa Inovalem, temos a
                        missão de levar qualidade de ensino <br /> para
                        você, que vem da periferia e tem muitos sonhos!</p>
                    <div className='div-button-cta'>
                        <Link to="/cadastro"> <button className='button-cta'>Crie seu negócio!</button> </Link>
                        <a href=" https://linktr.ee/inovalem" target="_blank"><button className='button-cta2'>Fale conosco</button></a>
                    </div>
                </div>

                <div className='div-imagem-cta'>
                    <img src={ImgCTA} />
                </div>

            </section>
        </main>
    )
}