import React from 'react'
import { MvPlayerListItem } from './MvPlayerListItem'
import '../css/MvPlayerList.css'

const MvPlayerList = (props) => {

    const position = props.movies.findIndex(movie => movie.id === props.selectedMovie.id) + 1
    const total = props.movies.length
    
    const renderList = () => {
       return props.movies.map((movie, i) => {
           const active = movie.id === props.selectedMovie.id ? true : false
           return (
               <MvPlayerListItem 
                 {...movie}
                 key={movie.id}
                 number= {i + 1}
                 active = {active}
                 handleSelectedMovie={props.handleSelectedMovie}
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