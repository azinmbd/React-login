import {GET_ACCOUNT_BUILDING} from '../../Type/Types';

const getApiAccounBuilding = res => ({
    type: GET_ACCOUNT_BUILDING,
    payload: res
  });

    export const getAccountsBuilding = (token) =>  {

        return dispatch => {
            // console.log(token)
            fetch('http://nbroker.fleetak.com:5906/api/buildings/account?limit=30', {
    
                method: 'get',
        
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },

                })
        
                .then(res => res.json())
                // .then(res =>{

                //         console.log(res)
                //         dispatch(getApiAccounBuilding(res));

                // }
                
                // )


                // new code 
                
                .then(res => {
                    // let Buildings=[];
                    let result = res.data
                    const list = document.querySelector('.list');
                    
                    // Buildings.push(...res.data)
                    // console.log(result[0].name)
                    dispatch(getApiAccounBuilding(res));
                    
                    // const markup = result.map(({ type, name, city }) => {
                    //     return`<div>
                    //     <p>${type}</p>
                    //     <p>${name}</p>
                    // </div>`


                    // })

                    const markup = `
                        <div class="container">
                            <div class="row mt-5">
                                        ${result.map(data => 
                                                `
                                                <div class="col-lg-4">
                                                    <div class="shadow-lg p-3 mb-4 text-left bg-white rounded ">
                                                        <div class="d-flex justify-content-around">
                                                            <p>name:</p>
                                                            <h6> ${data.name} </h6>
                                                        </div>

                                                        <div class="d-flex justify-content-around">
                                                            <p>type:</p>
                                                            <h6> ${data.type} </h6>
                                                        </div>
                                                        <div class="d-flex justify-content-around">
                                                            <button type="button" class="btn btn-primary">add</button>
                                                            <button type="button" class="btn btn-danger">remove</button>
                                                        </div>

                                                    </div>
                                                </div>
                                                    `
                                        ).join('')}
                            </div>
                        </div>
                                    `;


                    // const markup = result.map(data => {
                    //     const {name, type}=data
                    //     console.log(name)
                    //     console.log(type)
                    //     return`<div>
                    //                 <p>${type}</p>
                    //                 <p>${name}</p>
                    //             </div>`

                                

                        
                    // })

                        list.innerHTML=markup

                    
                    
                    // new code 



            })
        }
    
    }
