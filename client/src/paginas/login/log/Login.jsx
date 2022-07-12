import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Logo from '../login-imagens/logo.svg';
import './Login.css'
import axios from 'axios';
import { AuthContext } from '../../../helpers/AuthContext';
import { useContext } from "react";

function Login() {

    const { setAuthState } = useContext(AuthContext)

    let navigate = useNavigate();
   
    const handleClickLogin = (values) => {
        axios.post("http://localhost:9000/login", values).then((response) => {
            if (response.data.error) {
            alert (response.data.error);
            } else {
            localStorage.setItem("accessToken", response.data.token);
            setAuthState({email: response.data.email, id: response.data.id, status: true})
            console.log(response.data.email, response.data.id)
            navigate("/home")
            }
        })
    };
    


    return ( 
        <div className="container-geral">
            <div className="container-login">
                <div className="com-login">
                <Formik 
                    initialValues={{}}
                    onSubmit={handleClickLogin}
                >
                    <Form className="form-login">            
                        <span className="form-login-logo"><img src={Logo} alt="Inovalem" /></span>
                        <span className="form-login-titulo">Olá, novamente! é um prazer te receber na nossa plataforma</span>

                        <div className='login-input-email'>
                            <Field
                                className='input-login' 
                                name="email"
                                autoComplete="off"
                            />
                             <ErrorMessage name="email" component="span"/>
                            <span 
                                className='foco-input' 
                                data-placeholder="Email">
                            </span>
                        </div>

                        <div className='login-input-senha'>
                            <Field
                                className='input-cadastro' 
                                type="password"
                                name="senha"
                                autoComplete="off"
                            />
                            <ErrorMessage name="senha" component="span"/>
                            <span 
                                className='foco-input' 
                                data-placeholder="Senha">
                            </span>
                        </div>

                        {/* faz parte do login dentro do fomulário, é um botão */}
                        <div className='container-login-form-botao'>
                            <button type='submit' className='form-login-botao'> Entrar </button>
                        </div>

                        <div className='form-login-botão-criar-conta'>
                            <span className='txt-nao-p-conta'> Não possui conta?</span>
                            <Link to="/Cadastro"  className='txt-criar-conta'>Criar conta</Link>
                        </div>
                    </Form>
                </Formik>
                </div>
            </div>
        </div>
    );
}

export default Login;