import React from 'react';
import FriendCard from '../FriendCard/FriendCard';
import "./style.scss"
import urlUser from "../Header/07_yulia_akimenkooo.jpg"


const FriendsCards = (props) => {

    const { cards, toggleFavorite, toggleAdded } = props

    return (
        <div className="right-block">
            <div className="user-block">
            <div className="title">
               
               <img  className= "title-card__photo"src={urlUser.toString()} alt="yulia_akimenkooo" />
             
             <div className="title-card__title-container">
                 <h2 className="title-card__name">"yulia_akimenkooo"</h2>
                 <p className="title-card__life-credo">Побороть дурные привычки...</p>
             </div>
         </div>
                  </div>
            <ul className="friendContainer">
            <p className="recomended">Вы подписаны</p>
                
                    {cards
                        .filter(el => el.added)
                        .map(el => <FriendCard
                            toggleAdded={toggleAdded}
                            toggleFavorite={toggleFavorite}
                            added={el.added}
                            key={el._id}
                            name={el.name}
                            url={el.url}
                            _id={el._id}
                            isInfavorite={el.isInfavorite}
                        />)
                    }
                    <div className="foot-container">
                    <p className="foot">Информация Помощь Пресса API Вакансии</p>
                    <p className="foot" >Конфиденциальность Условия Места</p>
                    <p className="foot">Популярные аккаунты Хэштеги Язык</p>
                    </div>
            </ul>
        </div>
    )
}

export default FriendsCards;
