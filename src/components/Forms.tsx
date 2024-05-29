import { useState } from "react"
import { FormEvent } from "react"

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
            user: {
                ...state.user, [e.target.name]: e.target.value
            }
        })
    }
    const handleForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const handleInput = () => {
        console.log(JSON.stringify(state.user))
    }

    return (
        <>
            <h1>LOGIN FORM</h1>
            <form>
            <div className="mb-3 p-2">
                    <label htmlFor="exampleInputName" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="exampleInputName" />
                </div>

                <div className="mb-3 p-2">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" />
                </div>

                <div className="mb-3 p-2">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
               
                <button type="submit" className="btn btn-primary m-3">Submit</button>
            </form>
        </>
    )
}

export default Forms
