import React from 'react'
import { Competition } from '../types'
import LeagueItem from './LeagueItem';

type Props = {
  data: Competition[];
  itemsPerPage: number;
  selectedPage: number;
}

const Leagues = ({data, itemsPerPage, selectedPage}: Props) => {
  console.log(selectedPage, itemsPerPage);
  
  const selectedPageData = data.slice(selectedPage, itemsPerPage + selectedPage)
  return (
    <section>{
      selectedPageData.map(item=>{
        return <LeagueItem key={item.id} league={item}/>
      })
    }</section>
  )
}

export default Leagues;