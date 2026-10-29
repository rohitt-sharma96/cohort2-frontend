STEPS TO USE ROUTER IN REACT:-

- Install react-router-dom
- import {BroswerRouter} from 'react-router-dom'  inside the main.jsx;
- wrap the app e.g. <BrowserRouter>
                        <App />
                    <BrowserRouter>

- inside App.jsx  
- inside {Routes, Route} from 'react-router-dom';
- wrap Route inside Routes  
    e.g., - <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/about' element={<About />} />
            </Routes>

- <Link> Tag (it support SPA {single page Application})
- import Link Tag in App.jsx
- it's a advance version of anchor Tag
- e.g. - <Link to='/about' > About</Link>

- Nested Routes can be written this way - path= "/product/men"
- Dynamic Routes can be written this way - path= "/product/:id"

- You can access the :Id (dynamic path) by useParams() hooks
