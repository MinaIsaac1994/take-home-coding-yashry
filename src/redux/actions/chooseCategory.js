export const  CHOOSE_CATEGORY='CHOOSE_CATEGORY'

export function chooseCategory (id){
    
    return{
        type: CHOOSE_CATEGORY,
        id
    }
}