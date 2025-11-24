import { request } from "./Request"

export const login=async(values)=>{
    try{

        const response=await request(
            {
                url:'/loginUser',
                method:'POST',
                data:{
                    usernameOrEmail: values.email,  
                    passwordHash: values.password    
                },
            });

            console.log('login response ===>',response)

            if(response?.data?.token){
                return response;
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
                url:'/registerUser',
                method:'POST',
                data:values,
            });
            console.log('signup response ===>',response)
            if(response){
                const {email,password}=values;
                const loginResponse= await login({email,password})
                 console.log('token after signup ===>',loginResponse);
                return loginResponse;
               
            }

    }
    
    catch(error){
        console.log('error ===>',error)
    }
}

