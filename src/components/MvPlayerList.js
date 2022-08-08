import React from 'react'
import { MvPlayerListItem } from './MvPlayerListItem'
import '../css/MvPlayerList.css'

const MvPlayerList = (props) => {
    const position ='1'
    const total = '10'
    
    const renderList = () => {
       return props.movies.map((movie, i) => {
           const active = movie.id === props.selectedMovie.id ? true : false
           return (
               <MvPlayerListItem 
                 {...movie}
                 key={movie.id}
                 number= {i + 1}
                 active = {active}
               />           
            )
       })
    }
    return(
        <div className='mvPlayerList'>
            <div className='mvPlayerList--header'>
                <h3>{props.selectedMovie.title}</h3>
                <div className='mvPlayerList--badge'>{position}/{total}</div>
            </div>
            <div className='mvPlayerList--list'>{renderList()}</div>

        </div>
    )
}

export { MvPlayerList }