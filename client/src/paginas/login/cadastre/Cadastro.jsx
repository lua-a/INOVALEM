import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./cadastro.css"
import * as yup from "yup";
import axios from 'axios';
import Logo from '../login-imagens/logo.svg';

function Cadastro() {

    const handleClickCadastro = (values) => {
        axios.post("http://localhost:9000/cadastrar", values).then((response) => {
            console.log(values);
        })
        window.location.replace("/filtragem")
    };


    return (
        <div className="container-geral-cadastro">
            <div className="container-cadastro">
                <div className="com-cadastro">
                    <Formik
                        initialValues={{}}
                        onSubmit={handleClickCadastro}
                    >
                        <Form className="form-cadastro">
                            <span className="form-cadastro-logo"><img src={Logo} alt="Inovalem" /></span>
                            <span className="form-cadastro-titulo">  Olá, é um prazer te receber na nossa plataforma. </span>

                            <div className='input-nome-cadastro'>
                                <Field
                                    className='input-cadastro'
                                    autoComplete="off"
                                    name="nome"
                                />
                                <ErrorMessage name="nome" component="span" />
                                <span
                                    className='foco-input'
                                    data-placeholder="Nome">
                                </span>
                            </div>

                            <div className='input-email-cadastro'>
                                <Field
                                    className='input-cadastro'
                                    name="email"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="email" component="span" />
                                <span
                                    className='foco-input'
                                    data-placeholder="Email">
                                </span>
                            </div>

                            <div className='input-senha-cadastro'>
                                <Field
                                    className='input-cadastro'
                                    type="password"
                                    name="senha"
                                    autoComplete="off"
                                />
                                <ErrorMessage name="senha" component="span" />
                                <span
                                    className='foco-input'
                                    data-placeholder="Senha">
                                </span>
                            </div>
                            <div className='container-cadastro-form-botao'>
                                    <button type="submit" className='form-cadastro-botao'> Cadastrar </button>
                            </div>

                            <div className='form-cadastro-botão-criar-conta'>
                                <span className='txt-p-conta'>Já possui uma conta?</span>
                                <Link to="/Login" className='txt-conta'>Entrar</Link>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;