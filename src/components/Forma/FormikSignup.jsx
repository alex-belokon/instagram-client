import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import Icon from "../Icon/Icon";
import "./style.scss";
import { Link } from "react-router-dom";
import LogoUser from "../Header/07_yulia_akimenkooo.jpg";
//import axios from "axios";

const FormikSignup = (props) => {
  //const [autorUser, setAutorUser] = useState("");
  const [comentUser, setComentUser] = useState("");
  //const [urlUser, setUrlUser] = useState("");

  const handleSubmitForm = (values) => {
    const { coment } = values;
    setComentUser(coment);

    //   const data = {
    //     autor: autorUser,
    //     message: comentUser,
    //     urlUser: urlUser,
    //   };

    //   axios
    //     .post('http://localhost:8082/api/books', data)
    //     .then((res) => {
    //       setAutorUser({
    //         autor: "autorUser",
    //         message: "comentUser",
    //         urlUser: "urlUser",
    //       });
    //       console.log(data);
    //       props.history.push("/");
    //     })
    //     .catch((err) => {
    //       console.log("Error in CreateBook!");
    //     });

    //   console.log(data);
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
      {comentUser}
    </div>
  );
};

export default FormikSignup;
