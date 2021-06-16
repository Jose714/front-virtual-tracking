import './inicio.css';
import './util.css';
import React, {useState } from "react"; 
import { Link as RouterLink } from "react-router-dom";

export default function Evaluación(){

    const [state, setState] = useState({
        form: {
            documento: "",
            AT: "",
            PA: "",
            II: "",
            CC: "",
        }, 
    }); 

    var aspectos = 0.60;
    var practicas = 0.20;
    var investigacion = 0.10;
    var competencias = 0.10;

    var calificacion = (state.form.AT*aspectos)+(state.form.PA*practicas)+(state.form.II*investigacion)+(state.form.CC*competencias);

    var resultado = calificacion;

    const handleChange = (e) => {
        setState({
            form:{
                ...state.form, 
                [e.target.name]: e.target.value,
            },
        }); 
    }


    return (
        <div className="inicio">
            <div class="container-contact100">
                <div class="wrap-contact100">
                    <form class="contact100-form validate-form position-absolute">
                        <h2>Evaluación Estudiantes</h2>
                        <br></br>
                        <div class="wrap-input100 validate-input">
                            <span class="label-input100" for="documento">Por favor ingrese el ID del estudiante a calificar</span>
                            <input class="input100" type="text" pattern="[0-9]{0,11}"name="documento" placeholder="No. Documento" id="documento" required="true" onChange={handleChange}/>
                            <span class="focus-input100"></span>
                        </div>

                        <div class="wrap-input100 validate-input" data-validate="La nota es requerida">
                            <span class="label-input100" for="AT">Ingrese la nota de Aspectos Técnicos</span>
                            <input class="input100" type="text" pattern="[0-5]{1}[.]{1}[0-9]{1}" name="AT" placeholder="Nota Aspectos Técnicos" id="AT" required="true" onChange={handleChange}></input>
                            <span class="focus-input100"></span>
                        </div>
                        <div class="wrap-input100 validate-input" data-validate="La nota es requerida">
                            <span class="label-input100" for="PA">Ingrese la nota de Prácticas Ágiles </span>
                            <input class="input100" type="text" pattern="[0-5]{1}[.]{1}[0-9]{1}" name="PA" placeholder="Nota de Prácticas Ágiles" id="PA" required="true" onChange={handleChange}></input>
                            <span class="focus-input100"></span>
                        </div>
                        <div class="wrap-input100 validate-input" data-validate="La nota es requerida">
                            <span class="label-input100" for="II">Ingrese la nota de Investigaciones e Innovaciones</span>
                            <input class="input100" type="text" pattern="[0-5]{1}[.]{1}[0-9]{1}" name="II" placeholder="Nota de Investigaciones e Innovaciones" id="II" required="true" onChange={handleChange}></input>
                            <span class="focus-input100"></span>
                        </div>
                        <div class="wrap-input100 validate-input" data-validate="La nota es requerida">
                            <span class="label-input100" for="CC">Ingrese la nota de Competencias Comunicativas</span>
                            <input class="input100" type="text" pattern="[0-5]{1}[.]{1}[0-9]{1}" name="CC" placeholder="Nota de Competencias Comunicativas" id="CC" required="true" onChange={handleChange}></input>
                            <span class="focus-input100"></span>
                        </div>
                        <div><br></br>
                            <span>La nota del estudiante es: {Number.parseFloat(resultado).toFixed(1)}</span>
                        </div>
                        <div class="container-contact100-form-btn">
                            <div class="wrap-contact100-form-btn">
                                <div class="contact100-form-bgbtn"></div>
                                <RouterLink to="/app/dashboard">
                                <button class="contact100-form-btn" 
                                type="submit">
                                Registrar notas
                                <i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                                </button>
                                </RouterLink>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div id="dropDownSelect1"></div>

            <script src='./vendor/jquery/jquery-3.2.1.min.js'></script>
            <script src='./vendor/animsition/js/animsition.min.js'></script>
            <script src='./vendor/bootstrap/js/popper.js'></script>
            <script src='./vendor/bootstrap/js/bootstrap.min.js'></script>
            <script src='./vendor/select2/select2.min.js'></script>
            <script src='./vendor/daterangepicker/moment.min.js'></script>
            <script src='./vendor/daterangepicker/daterangepicker.js'></script>
            <script src='./vendor/countdowntime/countdowntime.js'></script>
            <script src='./js/main.js'></script>

            <script src='https://code.jquery.com/jquery-3.2.1.js'></script>
        </div>
    );
}; 
