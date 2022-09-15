import axios from 'axios'

const getFoodDetails = (food) => {
    const options = {
        method: 'GET',
        url: 'https://calorieninjas.p.rapidapi.com/v1/nutrition',
        params: { query: food },
        headers: {
            'X-RapidAPI-Key':
                'c5a8049fa1mshe1b157a1eaeda84p179c30jsn8e7fa87235c7',
            'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com',
        },
    }

    return axios.request(options).then((response) => response.data)
    
}

export default getFoodDetails
