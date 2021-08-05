import React from 'react'
import UserList from "../components/UserList/UserList"




const AppRoutes = (props) => {
    const { toggleAdded, toggleFavorite, cards } = props
    return (
        <>
                    <UserList
                        toggleAdded={toggleAdded}
                        toggleFavorite={toggleFavorite}
                        cards={cards}
                    />
        </>
    )
}

export default AppRoutes;
