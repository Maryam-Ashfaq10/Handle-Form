import { useState } from "react"

interface formState {
    user: {
        username: string,
        email: string,
        password: string,
        phone: number
    }
}

const Forms = (): React.ReactNode => {
    const [state, setState] = useState<formState>({
        user: {
            username: '',
            email: '',
            password: '',
            phone: 0
        }
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
       setState({
        user:{
            ...state.user, [e.target.name] : e.target.value
        }
       })
       console.log(JSON.stringify(state.user))
    }

    return (
        <>
            <h1>LOGIN FORM</h1>
            <form>

                username: <input type="text" value={state.user.username} onChange={handleChange} name="username" id="name" /> <br />
                email:    <input style={{ margin: '5px' }} type="text" value={state.user.email} onChange={handleChange} name="email" id="email" /> <br />
                password: <input type="password" value={state.user.password} onChange={handleChange} name="password" id="password" /><br />
                phone number: <input style={{ margin: '5px' }} type="text" value={state.user.phone} onChange={handleChange} name="phone" id="phone" />
 
               <button type="submit">submit</button>
            </form>
        </>
    )
}

export default Forms
