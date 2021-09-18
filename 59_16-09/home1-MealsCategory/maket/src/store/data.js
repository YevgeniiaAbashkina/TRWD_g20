const BASE_URL="https://www.themealdb.com/api/json/v1/1";

export default class MealsApi{
    static getCategories(){
        return fetch(`${BASE_URL}/categories.php`)
        .then(response=> response.json())
        .then(data => {console.log(data); return data}
        )
        .catch(error =>{throw new Error(error.messsage)})
    }

    static async getMealsByCategorie(category){
        try{
            const response=await fetch(`${BASE_URL}/filter.php?c=${category}`);
            if(response.ok){
                const data=await response.json()
                return data
            }
            throw new Error(response.status)
        }catch(error){
            throw new Error(error)
        }
    }
}