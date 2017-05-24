import React from 'react'



function SearchInput (props){

        return (
            <div>
                    <h1>{props.message}</h1>
            <input type="text" placeholder={props.userName}/>
            </div>
                )
}




export default SearchInput