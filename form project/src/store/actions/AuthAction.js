import {LOGIN_SUCCSESS} from '../../Type/Types';


const receiveMyApi = res => ({
    type: LOGIN_SUCCSESS,
    payload: res
  });

export const signInsubmit = ({username, password}) =>  {

    return dispatch => {
        fetch('http://nbroker.fleetak.com:5906/api/noauth/signin/password', {

            method: 'post',
    
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
                app_type: "web",
                app_id: "123123"
                }),
            })
    
            .then(res => res.json())
            .then(
                res =>{
                    // Token 
                    console.log(res)
                    dispatch(receiveMyApi(res));
                    

                    if(res.status){
                        document.getElementById("FormErorr").insertAdjacentHTML("afterbegin", "Login Erorr!")
                        document.getElementById("LoginEmail").value = '';
                        document.getElementById("LoginPass").value = '';
                    }
                    else{
                        // console.log(res)
                        redirect: window.location.replace("http://localhost:3000") 

                        // history.push('/Home')

                    }

                }
                
            )
    }

}

