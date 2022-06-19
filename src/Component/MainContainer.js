import React from 'react'
import data from '../data'
import TileContainer from './TileContainer'

const MainContainer = () => {
  return (
    <div>
        {data.map((element)=>{
            return (
                <TileContainer title={element.title} description={element.description} key={element.description}/>
            )
        })}
    </div>
  )
}

export default MainContainer