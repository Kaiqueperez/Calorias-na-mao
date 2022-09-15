import { useState } from 'react'
import FoodDetail from '../FoodDetails'
import getFoodDetails from '../../services/getFoodDetails'
import getTranslateDetails from '../../services/getTranslateDetails'
import * as S from './styles'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header';

import Footer from '../Footer';

const App = () => {
    const [inputValue, setInputValue] = useState('')
    const [foods, setFoods] = useState([])

    const searchHandler = () => {
        
        getFoodDetails(inputValue).then((response) => {
            setFoods(response.items)
            setInputValue('')
        })
        getTranslateDetails(inputValue).then((response) => {
            setFoods(response.items)
            setInputValue('')
        })
    }

    return (
    <S.MainConteiner>
        <S.Container >
            <Header/>
            <S.Search>
                
                <S.Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter the food you want"
                />
                <S.Button onClick={searchHandler}>Search</S.Button>
            </S.Search>
            {foods.length > 0 && <FoodDetail foods={foods} />}
            <Footer/>
        </S.Container>
    </S.MainConteiner>
    )
}

export default App
