import './workstle.css';
import  { AuthContext } from '../../../helpers/AuthContext';
import axios from "axios";
import { useState, useEffect } from 'react';
import SideBar from '../../../componentes/SideBar/SideBar';
import { HeaderParaElas } from '../../../componentes/header paraElas/HeaderParaElas';
import Mulher from '../../../images/woman.svg'
import { Footer } from '../../../componentes/footer/Footer';
import api from '../../precificacao/api'

export function Workshop() {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [data, setData] = useState("")
    const [work, setWork] = useState("")

    function handleAdicionar() {
        const values = {
            nome: nome, 
            email: email,
            telefone: telefone, 
            data: data, 
            work: work, 
        }
        console.log(values)
        const response = api.post('/workshop', values)
        setNome("")
        setEmail("")
        setTelefone("")
        setData("")
        setWork("")
    };

    const [ authState, setAuthState ] = useState(true)

    useEffect(() => {
        axios.get("http://localhost:9000/login/auth", {headers: {
        accessToken: localStorage.getItem("accessToken"),
        },
    }).then((response) => {
        if (response.data.error) {
            setAuthState(false)
        } else {
            setAuthState(true)
            }
        });
    }, []);  

    return (
        <>
        <AuthContext.Provider value={{authState, setAuthState}}>
        {authState && (  
            <>
                <HeaderParaElas />
                <SideBar />
                <div className='container-workshop'>
                    <div className='filas'>
                        <h1 className='txt-inicio'> Venha aprender, evoluir <br /> e brilhar<span className='spanTxtTitulo-workshop'> conosco</span> </h1>
                        <p className='txt-inicio-dois'>
                            Com os workshops você terá a chance de desenvolver e <hr />
                            aprender muitas técnicas com as melhores empreendedoras do Brasil.
                            <hr />
                            Elas são mulheres que, assim como você, tiveram dificuldades,
                            <hr />
                            mas usaram isso como motivação para chegar onde chegaram!
                        </p>
                        <div className='form-cor'>
                            <div className='textImg'>
                                <img className='mulher' src={Mulher} alt="" />
                                <p className='p-explicacaoForms'>
                                    A ideia aqui é reunir mulheres que estão começando no <br /> empreendedorismo
                                    alimentício para agregar conhecimentos <br /> práticos como: educação  financeira,
                                    gestão do tempo, <br /> dicas de cozinha e muito mais! A participação será através
                                    de <br /> um sorteio e ao se cadastrar informaremos as <br />  próximas etapas por email
                                    para que você fique  atenta caso seja escolhida para participar!</p>
                            </div>
                            <div className="txt-direita">
                                <h3 className="txt-dentro-fomulario">Para participar, preencha o formulário abaixo:
                                </h3>
                                <div className="registro-form">
                                    <div className="form-txt">
                                        <div class="form-group">
                                            <input className={nome !== "" ? 'has-val input-registro' : 'input-registro'}
                                                type="text"
                                                required
                                                value={nome}
                                                onChange={e => setNome(e.target.value)}
                                            />
                                            <span className='foco-input-registro'
                                                data-placeholder="Nome completo">
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-txt">
                                        <div className="form-group">
                                            <input className={email !== "" ? 'has-val input-registro' : 'input-registro'}
                                                type="email"
                                                required
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                            />
                                            <span className='foco-input-registro'
                                                data-placeholder="Email">
                                            </span>
                                        </div>
                                        <div className="form-group">
                                            <input className={telefone !== "" ? 'has-val input-registro' : 'input-registro'}
                                                type="number"
                                                minlength="10"
                                                maxlength="10"
                                                required
                                                pattern="[0-9]{8}"
                                                value={telefone}
                                                onChange={e => setTelefone(e.target.value)}
                                            />
                                            <span className='foco-input-registro'
                                                data-placeholder="Telefone">
                                            </span>
                                        </div>
                                        <div className="form-group">
                                            <input className={data !== "" ? 'has-val input-registro' : 'input-registro'}
                                                type="date"
                                                id='data'
                                                minLength="8"
                                                maxlength="8"
                                                required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                                                value={data}
                                                onChange={e => setData(e.target.value)}
                                            />
                                            <span className='foco-input-registro'
                                                data-placeholder="Data de nascimento">
                                            </span>
                                        </div>
                                        <div className="form-group">
                                            <input className={work !== "" ? 'has-val input-registro' : 'input-registro'}
                                                type="text"
                                                required
                                                value={work}
                                                onChange={e => setWork(e.target.value)}
                                            />
                                            <span className='foco-input-registro'
                                                data-placeholder="Porque você quer participar desse workshop?">
                                            </span>
                                        </div>
                                        <div className='container-btn-registro'>
                                            <input className="botao-registro"
                                                onClick={handleAdicionar}
                                                type="submit"
                                                value="Enviar" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='branco'>
                    MORRI
                </div>
                <Footer />
            </>
        )}
        {!authState && (
            window.location.replace("/login")
        )}
        </AuthContext.Provider>
        </>
    );
}