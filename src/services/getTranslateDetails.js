import axios from "axios";

const getTranslateDetails = () => {

    const encodedParams = new URLSearchParams();
        encodedParams.append("q", "Hello, world!");
        encodedParams.append("target", "en");
        encodedParams.append("source", "pt");

        const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '902df64e6dmsh7eda7e2aa592ccep1078dejsn62e3b11ec6e6',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: encodedParams
        
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

}

export default getTranslateDetails