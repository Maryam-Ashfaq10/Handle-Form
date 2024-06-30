import { useState } from "react"


const Forms = (): React.ReactNode => {
    const [userName, setUserName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    
    const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input= e.target.value;
        setUserName(input)

    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input= e.target.value;
        setEmail(input)

    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input= e.target.value;
        setPassword(input)

    }

    const isDisabled = !userName || !email || !password

    return (
        <>
            <h1>LOGIN FORM</h1>
            <form>
            <div className="mb-3 p-2">
                    <label htmlFor="exampleInputName" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="exampleInputName" value={userName} onChange={handleUserName} />
                </div>

                <div className="mb-3 p-2">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={handleEmail} />
                </div>

                <div className="mb-3 p-2">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={handlePassword}/>
                </div>
               
                <button type="submit" className="btn btn-primary m-3" disabled={isDisabled}>Submit</button>
            </form>
        </>
    )
}

export default Forms
