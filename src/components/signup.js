import React, { useState } from 'react';
import {ReactComponent as Art} from '../assets/login-page.svg';
import {ReactComponent as GoogleIcon} from '../assets/search.svg';
import {ReactComponent as FacebookIcon} from '../assets/f_logo_RGB-Blue_1024.svg';


function SignUp(props) {
    const [type , setType] = useState('signup');
  return (
    <div className='signup-overlay'>
        <div className='signup'>
        <div className='close' onClick={()=>props.setSignup(false)}>X</div>

            <div className='top'>
            Let's learn, share & inspire each other with our passion for computer engineering. Sign up now
            </div>
            <div className='heading'>
            <h2>{type==='signup'?'Create Account':'Welcome Back'}</h2>
            {type==='signup'?
            <p onClick={()=>setType('signin')}>Already have an account? <span>Sign In</span></p>
            :
            <p onClick={()=>setType('signup')}>Don’t have an account yet? <span>Create new for free! </span></p>
            }
            </div>
            <div className='main'>
                <div className='form'>
                    {type==='signup'?
                    <>
                    <form>
                        <div className='name'>
                            <input type='text' placeholder='First Name' />
                            <input type='text' placeholder='Last Name' />
                        </div>
                        <input type='email' placeholder='Email' />
                        <input type='password' placeholder='Password' />
                        <input type='password' placeholder='Confirm Password' />
                        <div style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <button className='form-submit' type='submit'>Create Account</button>
                        <p className='mobile' onClick={()=>setType('signin')}>or, Sign In</p>
                        </div>
                    </form>
                        <button className='sign-up-fb'><FacebookIcon />Sign up with Facebook</button>
                        <button className='sign-up-g'><GoogleIcon />Sign up with Google</button>
                        <p style={{whiteSpace:'break-spaces',textAlign:'center'}} className='mobile'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                    </>
                    :
                    <>
                    <form>
                        <input type='email' placeholder='Email' />
                        <input type='password' placeholder='Password' />
                        <div style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <button className='form-submit' type='submit'>Sign In</button>
                        <p className='mobile' onClick={()=>setType('signup')}>or, Create Account</p>
                        </div>
                    </form>
                        <button className='sign-up-fb'><FacebookIcon />Sign in with Facebook</button>
                        <button className='sign-up-g'><GoogleIcon />Sign in with Google</button>
                        <a style={{marginBottom:'3em'}} className='forgot-pass'>Forgot Password?</a>
                    </>
                    }
                </div>
                <div className='art'>
                    <Art />
                    {type==='signup'?
                    <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                    :null}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp;