import {Routes, Route, Navigate} from 'react-router-dom'
import { Leagues, Teams } from '../screens'
type Props = {}

const BasicRoutes = (props: Props) => {
  return (
    <Routes>
        <Route path='/' element={ <Navigate to="/leagues" /> }/>
        <Route path='/leagues' element={<Leagues/>}/>
        <Route path='/teams' element={<Teams/>}/>
    </Routes>
  )
}

export default BasicRoutes