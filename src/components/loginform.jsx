import {useState} from 'react'
import '../style/loginform.css'

const LoginForm = () => {
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('로그인 시도 :', email, password)
    }

    return(
        <div className='loginform'>
            <h1>사용자 입력 관리하기</h1>
            <from onChange={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    placeholder='email'
                />
                <br/>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='password'
                />
                <button type="submit">Login</button>
            </from>
        </div>
    )
}

export default LoginForm