
export const sigupSubmit = ({username, password}) => {
// console.log("dddddd")
    fetch ('http://nbroker.fleetak.com:5906/api/noauth/signup', {

        method: 'post',

        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password
        }),
    })

    .then(res => res.json())
    .then(
        res => {
            console.log(res)
        }
    )
}





