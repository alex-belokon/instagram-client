import React from 'react';
import { Link } from 'react-router-dom';
import "./modalStyle.scss";


const Modal = (props) => {

  const {_id, toggleIsOpenModal, coment, urlImage, url, country, name} = props
 
  // const template = coment.map(item => <span>item</span>)
  
  // console.log("coment", coment);
  // console.log("template", template);


  return (
    <div className="modalOverlay" onClick={() => toggleIsOpenModal(_id)}>
      <div className="modalwindow">
        <div className="modalwindow__container">
        <div><img  className="modalwindow__img" src={urlImage} alt="user" /></div>
        <div>
        <div className="user-container">
          <div>
          <img src={url} alt="user"className="icon-c"/>
          </div>
                <div>
                  <h2>{name}</h2>
                  <h3>{country}</h3>
                </div>    
                </div>
          <div>
            {coment.map( item => (  
                     
       <li className="message-container" key={item._id}   >
         <div >
             <Link to={item.autor} key={item._id} className="icon-cont">
                <img src={item.urlUser} alt={item.autor} className="icon-c"/>
                <h2>{item.autor}</h2>
                </Link>
            </div>
            <div>
                <p
                className="text-c"
                  >{item.message}</p>
            </div>  
       </li>
       ))}
       </div>
      </div> 
        </div>   
      </div>
    </div>
  )
}

export default Modal;

