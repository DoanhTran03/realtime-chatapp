import { Route, Routes } from 'react-router-dom'
import data from "./pageData"
const Router = () => {
  return (
    <Routes>
        {data.map(page => <Route key={page.title} element={<page.element></page.element>} path={page.path}></Route>)}
    </Routes>
  )
}

export default Router