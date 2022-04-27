    // Method to flatten the "singleCrypto" Object retrieved from the state stored in redux
    // Flattening is needed because "singleCrypto" is an object within an object
    // **Current issue** Flattening an object that is run on Ethereum will result in the object having its data replaced with that of Etherum
    // because the name, id, etc.. overwrite the data
    
export default function flattenObj(ob){
    let result = {};
     
        // loop through the object "ob"
        for (const i in ob) {
            // We check the type of the i using
            // typeof() function and recursively
            // call the function again
            if ((typeof ob[i]) === 'object' && !Array.isArray(ob[i])) {
                const temp = flattenObj(ob[i]);
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