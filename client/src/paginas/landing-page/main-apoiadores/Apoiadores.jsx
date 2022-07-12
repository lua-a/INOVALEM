import './apoiadores.css'
import LogoSenac from '../../../images/apoiadores/logo_senac.png'
import LogoInventivos from '../../../images/apoiadores/logo_inventivos.png'
import LogoSesc from '../../../images/apoiadores/logo_sesc.png'
import LogoCeu from '../../../images/apoiadores/logo_ceu.png'
import LogoProa from '../../../images/apoiadores/logo_proa.png'
import LogoTC from '../../../images/apoiadores/logo_fundacaotc.png'
import imgSlogan from '../../../images/imgs-landing/sloganLogo.svg'

export function Apoiadores() {
    return (
        <section className='section-apoiadores'>
            <div className='div-h2'>
            </div>

            <section className='section-cards'>
                <div className='card'>
                    <img src={LogoSenac} />
                </div>

                <div className='card'>
                    <img src={LogoInventivos} />
                </div>

                <div className='card'>
                    <img src={LogoSesc} />
                </div>

                <div className='card'>
                    <img src={LogoCeu} />
                </div>

                <div className='card'>
                    <img src={LogoProa} />
                </div>

                <div className='card'>
                    <img src={LogoTC} />
                </div>
            </section>
        </section>

    )
}

export function Slogan() {
    return (
        <>
            <section>
                <div className='div-slogan-landing'>
                    <img src={imgSlogan} width="620px" />
                </div>
            </section>

        </>
    )
}