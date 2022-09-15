
import * as S from './styles'


const FoodDetails = ({ foods }) => {

  
    return (
        <>
            {foods.map((food) => (
                <S.ContainerFoodDetails key={food.name}>
                
                <table>
                    <h3>{food.name}</h3>
                <tr>
                    <th>Macros/Micros</th>
                    <th>grams</th>
                </tr>
                <tr>
                    <td>Açucares</td>
                    <td> {food.sugar_g}</td>
                </tr>
                <tr>
                    <td>Fibras</td>
                    <td> {food.fiber_g}</td>
                </tr>
                <tr>
                    <td>Tamanho da porção </td>
                    <td> {food.serving_size_g}</td>
                </tr>
                <tr>
                    <td>Sódio</td>
                    <td> {food.sodium_mg}</td>
                </tr>
                <tr>
                    <td>Potássio</td>
                    <td> {food.potassium_mg}</td>
                </tr>
                <tr>
                    <td>Gordura Saturada</td>
                    <td>{food.fat_saturated_g} </td>
                </tr>
                <tr>
                    <td>Gordura Total</td>
                    <td> {food.fat_total_g}</td>
                </tr>
                <tr>
                    <td>Calorias</td>
                    <td> {food.fiber_g}</td>
                </tr>
                <tr>
                    <td>Proteínas</td>
                    <td> {food.protein_g}</td>
                </tr>
                <tr>
                    <td>Carboidratos totais</td>
                    <td>{food.carbohydrates_total_g} </td>
                </tr>


</table>
                    
                    
                </S.ContainerFoodDetails>
            ))}
        </>
    )
}

export default FoodDetails


//    list-style-type: none;