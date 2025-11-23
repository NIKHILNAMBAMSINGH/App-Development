import { request } from "./Request"

export const login=async(values)=>{
    try{

        const response=await request(
            {
                url:'/login',
                method:'POST',
                data:values,
            });

            if(response?.data?.token){
                return response?.data?.token;
            }

    }
    
    catch(error){
        console.log('error ===>',error)
    }
}

export const signUp=async(values)=>{
    try{

        const response=await request(
            {
                url:'/login',
                method:'POST',
                data:values,
            });

            if(response){
                const {email,password}=values;
                return login({email,password})
            }

    }
    
    catch(error){
        console.log('error ===>',error)
    }
}

