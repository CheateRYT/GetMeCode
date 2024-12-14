import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Main from './pages/Main'
createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Main />} />
			<Route path='*' element={<h1>Not Found</h1>} />
		</Routes>
	</BrowserRouter>
)
