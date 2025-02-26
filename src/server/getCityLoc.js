const axios = require("axios")


const getCityLoc = async(postalcode, country, username) => {
    const {data} = await axios.get(`https://secure.geonames.org/postalCodeLookupJSON?postalcode=${postalcode}&country=${country}&maxRows=1&username=${username}`)


    
    if(!data.postalcodes.length){
        const errMsg = {
            message: "No location found for that postal code. Please check your input.",
            error: true
        }
        return errMsg
    }
    return data.postalcodes[0]

}

module.exports =  {getCityLoc}
