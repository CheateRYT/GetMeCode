import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Main from './pages/Main'
import Workspace from './pages/Workspace'
createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Main />} />
			<Route path='/home' element={<Home />} />
			<Route path='*' element={<h1>Not Found</h1>} />
			<Route path='/workspace/:language' element={<Workspace />} />{' '}
		</Routes>
	</BrowserRouter>
)
