import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import Icon from "../Icon/Icon";
import "./style.scss";
import { Link } from "react-router-dom";
import LogoUser from "../Header/07_yulia_akimenkooo.jpg";
// import { useDispatch, useSelector } from 'react-redux';
// import { udateComent, updateCardsStore } from '../../store/actions';
// import { getComent } from '../../store/selectors';
// import { useEffect } from 'react';

const FormikSignup = (props) => {
 
  const [count, setCount] = useState("");

  

  const handleSubmitForm = (values) => {
    const { coment } = values;
    setCount(coment);

    const post = {
      autor: coment,
      message: coment,
      urlUser: null,
    };
    console.log(post);
  };
  


  return (
    <div className="container-coment">
      <Icon type="smile" className="smile-icon" />
      <Formik
        initialValues={{
          coment: "",
        }}
        onSubmit={handleSubmitForm}
      >
        {(formikProps) => {
          return (
            <Form>
              <div>
                <label>
                  <Field
                    className="input-enter"
                    placeholder="Оставьте сообщение..."
                    name="coment"
                    value={formikProps.values.coment}
                    type="textarea"
                  />
                </label>
              </div>
              <button type="submit">Опубликовать</button>
            </Form>
          );
        }}
      </Formik>
      <Link to="/yulia_akimenkooo">
        <img src={LogoUser} className="user-logo" alt="user-logo" />
      </Link>
      {count}
    </div>
  );
};

export default FormikSignup;
