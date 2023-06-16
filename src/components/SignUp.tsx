
type Props = {
    handleSignIn: (e: React.FormEvent<HTMLFormElement>) => Promise<void>

    setUsername: React.Dispatch<React.SetStateAction<string>>
    setPassword: React.Dispatch<React.SetStateAction<string>>

    username: string
    password: string
}

const SignUp = ({handleSignIn, setUsername, setPassword, username, password}:Props) => {

    let onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    return (
        <div className="h-screen bg-gradient-to-b from-blue-500 to-white h-screen">
            <div className="container">
                <div className="h-screen text-center font-sans flex items-center justify-center">
                    <form onSubmit={handleSignIn} className="border w-[500px] appearance-none shadow-lg rounded text-black-700 leading-tight">
                        <div className="p-6">
                            
                            <p className="text-2xl underline font-medium mb-4">Sign In</p>
                            <input 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" 
                                type="text" 
                            />
                            <input 
                                value={password} 
                                onChange={onPasswordChange} 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" 
                                type="password" 
                            />
                            <div className="flex justify-between mb-4">
                                <div className="flex items-center">
                                    <input type="checkbox" id="rememberMe" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-900 font-semibold">Remember Me</label>
                                </div>
                                <div className="text-sm font-medium">
                                    Sign Up?
                                </div>
                            </div>
                            <button
                                disabled={!username && !password}
                                className="w-full bg-black text-stone-50 p-2 font-medium rounded disabled:opacity-30"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;