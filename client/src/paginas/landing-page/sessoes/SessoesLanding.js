import './investimentoLanding.css'
import './educacaoLanding.css'
import './precificacaoLanding.css'
import './fraseLandingPage.css'
import './paraElasLanding.css'
import './quemSomosLanding.css'
import './voltarTopo.css'


import { useEffect, useState } from 'react'
import { BotaoInscrever, BotaoInscreverElas } from '../../../componentes/botao-inscrever/BotaoInscrever'
import simboloInovalem from '../../../images/imgs-landing/simboloInovalem.svg'
import simboloInovalemParaElas from '../../../images/imgs-landing/simboloInovalemParaElas.svg'
import aspasLanding from '../../../images/imgs-landing/aspasLanding.png'
import logoInstagramLanding from '../../../images/imgs-landing/logoInstagramLanding.svg'
import logoLinkedinLanding from '../../../images/imgs-landing/logoLinkedinLanding.svg'
import scrollTop from '../../../images/imgs-landing/scrollTop.svg'


//********* SESSAO DE INVESTIMENTO *********

export function InvestimentoNovoLanding() {
    return (
        <>
            <section className='section-investimento-landing'>
                <div className='div-investimento-landing'>
                    <h1 className='breve'>EM BREVE</h1>
                    <h1 className='titulo-investimento-landing'>Oportunidade de <span className='span-titulo-investimento'>
                        investirem </span>  no seu negócio </h1>
                    <p className='p-investimento-landing'>Nós forneceremos acesso a Investidores visualizarem <br /> o seu negócio, podendo aplicar alguns de seus recursos financeiros <br /> para ajudar ainda mais na construção da sua idéia.</p>

                    {/* <img className='imagem-cardbusiness' src={carteiraLanding} /> */}
                    <BotaoInscrever />
                </div>
            </section>
        </>
    )
}

//********* SESSAO DE EDUCAÇÃO *********

export function EducacaoLanding() {
    return (
        <>
            <section className='section-educacao-landing'>
                <div className='div-educacao-landing'>
                    <h1 className='titulo-educacao-landing'>Educação</h1>
                    <p className='p-titulo-educacao-landing'>Venha conhecer nossas trilhas de educação<br />diretamente do YouTube.
                        Nela você pode estudar sobre confeitaria, panificação<br />e muito mais!</p>
                    <BotaoInscrever />
                </div>

                <div className='cards-educacao-landing'>
                    <div className='card-educacao-landing'>
                        <img />
                        <h3 className='h3-card-educacao-landing'>90 +</h3>
                        <p className='p-card-educacao-landing'>Aulas gravadas</p>
                    </div>

                    <div className='card-educacao-landing'>
                        <img />
                        <h3 className='h3-card-educacao-landing'>50 +</h3>
                        <p className='p-card-educacao-landing'>Trilhas de Conteúdos</p>
                    </div>

                    <div className='card-educacao-landing'>
                        <img />
                        <h3 className='h3-card-educacao-landing'>100 +</h3>
                        <p className='p-card-educacao-landing'>Profissionais</p>
                    </div>
                </div>

            </section>

        </>

    )
}

//********* SESSAO DE PRECIFICAÇÃO *********

export function PrecificacaoLanding() {
    return (
        <>
            {/* <div className='div-simbolo-inovalem-landing'>
                <img className='imagem-simbolo-inovalem-landing' src={simboloInovalem} />
                <img className='imagem-simbolo-inovalem-landing' src={simboloInovalem} />
                <img className='imagem-simbolo-inovalem-landing' src={simboloInovalem} />
            </div> */}
            <section className='section-precificacao-landing'>
                <div className='div-elementos-precificacao-landing'>
                    <h1 className='titulo-precificacao-landing'> Aprenda a<span> precificar </span>o seu produto </h1>
                    <p className='p-precificacao-landing'>Você sabia que muitos empreededores têm dificuldade na hora de
                        precificar o seu produto?</p>
                </div>

                <div className='div-elementos2-precificacao-landing'>
                    <p className='p2-precificacao-landing'>
                        Entender o processo de precificação te ajuda
                        a praticar <br /> preços coerentes com o mercado,
                        satisfazer seus clientes e valorizar seu produto.
                    </p>
                    {/* <img className='imgPrecificacaoLanding' src={imgPrecificacaoLanding} /> */}
                </div>

                <div className='botao-inscrever-precificacao-landing'>
                    <BotaoInscrever />
                </div>
            </section>



        </>
    )
}

//********* FRASE LANDING PAGE *********

export function FraseLandingPage() {
    return (
        <>

            <section className='section-frase-landing'>
                <h1 className='frase-landing'>No meio da dificuldade <br /> encontra-se a oportunidade.</h1>

                <div className='div-aspas-frase-landing'>
                    <img className='imagem-aspas-frase-landing' src={aspasLanding} />
                </div>
            </section>



        </>

    )
}


//********* PARA ELAS *********

export function ParaElasLanding() {
    return (
        <>
            <div className='div-titulo-paraElas-landing'>
                <h1 className='titulo-paraElas-landing'> Para elas </h1>
                <hr />
            </div>
            <div className='div-simbolo-inovalem-landing'>
                <img className='imagem-simbolo-inovalem-landing' src={simboloInovalemParaElas} />
                <img className='imagem-simbolo-inovalem-landing' src={simboloInovalemParaElas} />
                <img className='imagem-simbolo-inovalem-landing' src={simboloInovalemParaElas} />
            </div>


            <section className='section-paraElas-landing'>

                <div className='card-paraElas-landing'>
                    <h1 className='titulo-card-paraElas-landing'>Workshop</h1>
                    <p className='p-card-paraElas-landing'>Já pensou em participar de um workshop <br />
                        ministrado por mulheres e para mulheres,<br />
                        aprendendo novas técnicas e conversando <br />
                        sobre suas dificuldades do dia-a-dia? <br />
                        Vem com a gente e voe alto!</p>
                    <BotaoInscreverElas />
                    <div className='div-imgWorkshop-landing'>
                        {/* <img className='imgWorkshopLanding' src={imgWorkshopLanding} /> */}
                        {/* <img className='imgWorkshopLanding' src={imgMulherWorkshopLanding} /> */}
                    </div>
                </div>


                <div className='card-paraElas-landing2'>
                    <h1 className='titulo-card-paraElas-landing'>Crianças</h1>
                    <p className='p-card-paraElas-landing'>Estar com nossos bens mais preciosos é <br />
                        ótimo. Mas sabemos que às vezes <br />
                        precisamos deixá-los com alguém de <br />
                        confiança para podermos trabalhar. <br />
                        E é pensando nisso que queremos te ajudar <br /> a encontrar uma solução!
                    </p>
                    <BotaoInscreverElas />
                    <div className='div-imgWorkshop-landing'>
                        {/* <img className='imgForumLanding' src={imgCriancaLanding} /> */}
                    </div>
                </div>


            </section>



        </>

    )
}

export function QuemSomosLanding() {
    return (
        <>
            <section className='section-quemSomos-landing'>



                <div className='div-quemSomos-landing'>
                    <h1 className='titulo-quemSomos-landing'> QUEM <span className='span-titulo-quemSomos-landing'> SOMOS </span> </h1>
                    <p className='p-quemSomos-landing'>Acreditamos no potencial de pequenos empreendedores! <br />
                        A Inovalem surgiu para te ajudar a inovar e ir além com o seu negócio. <br />
                        Uma plataforma pensada por empreendedores para empreendedores, <br /> da periferia para a periferia.</p>
                </div>

                <div className='div-socialMedia-quemSomos-landing'>
                    <a href="https://www.instagram.com/inovalem_/" target="_blank"><img src={logoInstagramLanding} /></a>
                    <a href="https://www.linkedin.com/company/inovalem/" target="_blank"><img src={logoLinkedinLanding} /></a>

                </div>

                <div className='blocoSimbolo-quemSomos-landing'>
                    <img className='img-simbolo-quemSomos-landing' src={simboloInovalem} />
                    <img className='img-simbolo-quemSomos-landing' src={simboloInovalem} />
                    <img className='img-simbolo-quemSomos-landing' src={simboloInovalem} />
                </div>


            </section>

        </>

    )
}


export function VoltarTopo() {

    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <>
            <div>
                {backToTopButton && (
                    <img style={{
                        position: "fixed",
                        bottom: "50px",
                        right: "50px",
                        cursor: "pointer"
                    }} onClick={scrollUp} className='imgVoltarTopo' src={scrollTop} />
                )}

            </div>

        </>




    )
}