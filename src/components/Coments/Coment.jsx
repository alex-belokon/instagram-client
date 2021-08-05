// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Icon from '../Icon/Icon';
// import "./style.scss"
// import { Formik, Form, Field } from "formik";
// import MyInput from "./MyInput";
// import { getValues } from "../../store/selectors";
// import { dataName } from "../../store/actions";
// import * as Yup from 'yup';

// const Coments = (props) => {
//   const {id, cards} = props

  
//   const dispatch = useDispatch()


//   const validationFormSchema = Yup.object().shape({
//     name: Yup.string()
//         .required('Required')
//         .min(2, 'Too Short Name!'),

// })

// const addComent = (id) => {
//   const newAr=cards.map(el => {
//     if(el.id === id) {
//     el.values = values.name
//     }
//     return el
    
//   })
//   // 
//   console.log(newAr)
// } 

//   const submitForm = (values, event) => {
//     event.preventDefault();
//     const { name } = values
    
//     addComent()
//     dispatch(dataName(name))
//     alert(values)
    
   
// };




//     return (
//         <div className="container-coment">
//           <Icon type="smile" className="smile-icon"/>
//           <Formik
//           initialValues={values}
//           onSubmit={submitForm}
//           validationSchema={validationFormSchema}
//           >
//             {(formikProps) => {
//               return (
//                 <div >
//                 <Form>
//                 <Field component={MyInput} name="coment" type="textarea"/>
//                 <div>
//                   <button type="submit" text="Send form" onClick={()=>addComent(id)}>Опубликовать</button>
//                 </div>
//                  </Form>
//                 </div>
//                 );
//              }}

//           </Formik>
//    <form>
//   <label>
//     Имя:
//     <input type="text" name="name" />
//   </label>
//   <input type="submit" value="Отправить" onClick={submitForm} />
// </form>

//         </div>
//     )
// }

// export default Coments;