import './landing.css'

import React from 'react';
import { Footer } from '../../../componentes/footer/Footer';
import { HeaderLanding } from '../../../componentes/header/Header';
import { SlideComentarios } from '../../../componentes/Slides/SlideComentarios';
import { Cta } from '../CTA/CTA';
import { Apoiadores, Slogan } from '../main-apoiadores/Apoiadores';
import { EducacaoLanding, FraseLandingPage, InvestimentoNovoLanding, ParaElasLanding, PrecificacaoLanding, QuemSomosLanding, VoltarTopo } from '../sessoes/SessoesLanding';


export function Landing() {
    return (
        <React.StrictMode>
            <div className='tudo'>
                <HeaderLanding />
                <Cta />
                <Apoiadores />
                <Slogan />
                <InvestimentoNovoLanding />
                <EducacaoLanding />
                <PrecificacaoLanding />
                <FraseLandingPage />
                <ParaElasLanding />
                <SlideComentarios />
                <QuemSomosLanding />
                <VoltarTopo />
                <Footer />
            </div>
        </React.StrictMode>
    )

}

