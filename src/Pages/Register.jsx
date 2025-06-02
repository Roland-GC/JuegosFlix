import { useRef, useState, useEffect } from 'react'
import {
  faCheck,
  faTimes,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuth } from '../hooks/useAuth'
import { Link } from 'react-router-dom'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
const EMAIL_REGEX = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

export function Register() {
  const userRef = useRef()
  const emailRef = useRef()
  const errRef = useRef()

  const [username, setUsername] = useState('')
  const [validName, setValidName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)

  const [pwd, setPwd] = useState('')
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  const [matchPwd, setMatchPwd] = useState('')
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  const { signup, currentUser } = useAuth()

  useEffect(() => {
    emailRef.current.focus()
  }, [])

  useEffect(() => {
    setValidName(USER_REGEX.test(username))
  }, [username])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email))
  }, [email])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd))
    setValidMatch(pwd === matchPwd)
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg('')
  }, [email, pwd, matchPwd])

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!EMAIL_REGEX.test(email) || !PWD_REGEX.test(pwd)) {
    setErrMsg('Invalid input');
    return;
  }

  try {
    await signup(email, pwd, username);

    setSuccess(true);
    setUsername('');
    setEmail('');
    setPwd('');
    setMatchPwd('');
  } catch (e) {
    console.error('Signup error:', e);
    setErrMsg(e.message);
    errRef.current.focus();
  }
};


  return (
    <>
      {success ? (
        <section className='login-section'>
          <h1>Thank you for Registering!</h1>
          <p>
            <Link to='/login'>Log In</Link>
          </p>
        </section>
      ) : (
        <section className='login-section'>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live='assertive'
          >
            {errMsg}
          </p>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <label htmlFor='username'>
              User:
              <FontAwesomeIcon icon={faCheck} className={validName ? 'valid' : 'hide'} />
              <FontAwesomeIcon icon={faTimes} className={validName || !username ? 'hide' : 'invalid'} />
            </label>
            <input
              type='text'
              id='username'
              ref={userRef}
              autoComplete='off'
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
              aria-invalid={!validName}
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p className={userFocus && username && !validName ? 'instructions' : 'offscreen'}>
              <FontAwesomeIcon icon={faInfoCircle} /> From 4 to 24 characters. Must start with a letter. Letters, numbers, hyphens and underscores allowed.
            </p>

            {/* Email */}
            <label htmlFor='email'>
              Email:
              <FontAwesomeIcon icon={faCheck} className={validEmail ? 'valid' : 'hide'} />
              <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? 'hide' : 'invalid'} />
            </label>
            <input
              type='email'
              id='email'
              ref={emailRef}
              autoComplete='off'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              aria-invalid={!validEmail}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <p className={emailFocus && email && !validEmail ? 'instructions' : 'offscreen'}>
              <FontAwesomeIcon icon={faInfoCircle} /> Must be a valid email.
            </p>

            {/* Password */}
            <label htmlFor='password'>
              Password:
              <FontAwesomeIcon icon={faCheck} className={validPwd ? 'valid' : 'hide'} />
              <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? 'hide' : 'invalid'} />
            </label>
            <input
              type='password'
              id='password'
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={!validPwd}
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}>
              <FontAwesomeIcon icon={faInfoCircle} /> 8-24 characters. Must include upper/lowercase, number, special character (!@#$%).
            </p>

            {/* Confirm Password */}
            <label htmlFor='confirm_pwd'>
              Confirm Password:
              <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? 'valid' : 'hide'} />
              <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? 'hide' : 'invalid'} />
            </label>
            <input
              type='password'
              id='confirm_pwd'
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={!validMatch}
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}>
              <FontAwesomeIcon icon={faInfoCircle} /> Must match the password field.
            </p>

            <button disabled={!validEmail || !validPwd || !validMatch}>Register</button>
          </form>

          <p>
            Already registered?
            <br />
            <span className='line'>
              <Link to='/login'>Log In</Link>
            </span>
          </p>
        </section>
      )}
    </>
  )
}
