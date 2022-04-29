    // Method to flatten the "singleCrypto" Object retrieved from the state stored in redux
    // Flattening is needed because "singleCrypto" is an object within an object
    // **Current issue** Flattening an object that is run on Ethereum will result in the object having its data replaced with that of Etherum
    // because the name, id, etc.. overwrite the data
    
function flattenSingleCrypto(ob){
    let result = {};

        // loop through the object "ob"
        for (const i in ob) {
            // console.log(ob.platform) 
            // We check the type of the i using
            // typeof() function and recursively
            // call the function again      
            // console.log(Object.keys(ob))
          
            if ((typeof ob[i]) === 'object' && !Array.isArray(ob[i])) {
                const temp = flattenSingleCrypto(ob[i]);
                for (const j in temp) {
                    // Store temp in result
                    result[ j] = temp[j];
                }
                
            }
            // Else store ob[i] in result directly
            else {
                result[i] = ob[i];
            }
        }

        return result;
}

const flattenSingleCrypto2 = (arr) => {
    const flatObject = {};
    for(let i=0; i<arr.length; i++){
       for(const property in arr[i]){
           if(property === 'platform'){
               continue
           }
          flatObject[`${property}`] = arr[i][property];
       }
    };
    return flatObject;
 }

function flattenMarketData(json){
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key){
        result.push(json[key]);
    });
    return result;
}

const cryptoFlatten = {
    flattenMarketData,
    flattenSingleCrypto,
    flattenSingleCrypto2
}

export default cryptoFlatten