import React from 'react'
import {Formik, Form} from 'formik';
import * as EmailValidtor from 'email-validator';
import * as yup from 'yup';
import './FormValidate.css';



function FormValidate() {
    const userValidate = yup.object().shape({
        nom: yup.string(),
        postNom: yup.string(),
        mail: yup.string(),
        password: yup.string().min(4).max(10),
        pays: yup.string(),
        phnNumber: yup.string()

    });
    const createUser= async (event) => {
         event.preventDefault()
         let formData = {
         nomReg: event.target[0].value,
         postNomReg: event.target[1].value,
         mailReg: event.target[2].value,
         passwordReg: event.target[3].value,
         paysReg: event.target[4].value,
         phnNumberReg: event.target[5].value,
         };
    const isValid = await userValidate.isValid(formData);
    console.log(isValid);
    };

    return (
        
            <div className="form">
                <h1>Camilux</h1>
                <form onSubmit={createUser} className="form2">
                <label htmlFor="nom">Nom</label>
      <input type="text" name="nomReg" id="nom" />
      <label htmlFor="postNom">Post-nom</label>
      <input type="text" name="postNomReg" id="postNom"/>
      <label htmlFor="mail">Mail</label>
      <input type="text" name="mailReg" id="mail"/>
      <label htmlFor="password">Password</label>
      <input type="password" name="passwordReg" id="password" />
      <label htmlFor="pays">Select country</label>
      <select name="paysReg" id="pays" >
        <option name="congo">Congo</option>
        <option name="kenya">Kenya</option>
        <option name="tanzania">Tanzania</option>
        <option name="zambia">zambia</option>
      </select>
      <label htmlFor="phnNumber">Phone number</label>
      <input type="text" name="phnNumberReg" id="phnNumber" />
      <input type="submit"/>
      </form>
            </div>

    )
}

export default FormValidate
