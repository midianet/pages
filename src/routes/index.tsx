
import { Routes, Route, Navigate } from 'react-router-dom';
import { Environment } from '../environment';
import Home from '../pages/Home';
import Quemsomos from '../pages/Quemsomos';
import Eventos from '../pages/Eventos';

export const AppRoutes = () =>  {
  return (<
    Routes>
        <Route path={Environment.HOME_MENU} element={<Home/>}/>
        <Route path={Environment.QUEMSOMOS_MENU} element={<Quemsomos/>}/>
        <Route path={Environment.EVENTOS_MENU} element={<Eventos/>}/>
        <Route path="*" element={<Navigate to={'/home'} />} />
  </Routes>
  )
}
