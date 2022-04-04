import {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import hero from './assets/hero.png';
import Header from './components/header';
import post1 from './assets/post1.png';
import post2 from './assets/post2.png';
import post3 from './assets/post3.png';
import profile1 from './assets/profile1.png';
import profile2 from './assets/profile2.png';
import profile3 from './assets/profile3.png';
import profile4 from './assets/profile4.png';
import Post from './components/post';
import SignUp from './components/signup';
import {ReactComponent as EditIcon} from './assets/edit_24px.svg'
import {ReactComponent as EditIcon2} from './assets/edit_2.svg'


const postData = [
  {
    id:1,
    image:post1,
    contentType:'Article',
    type:"✍️ Article",
    title:'What if famous brands had regular fonts? Meet RegulaBrands!',
    content:'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
    userImage:profile1,
    username:'Sarthak Kamra'
  },
  {
    id:2,
    image:post2,
    contentType:'Education',
    type:"🔬️ Education",
    title:'Tax Benefits for Investment under National Pension Scheme launched by Government',
    content:'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
    userImage:profile2,
    username:'Sarah West'
  },
  {
    id:3,
    image:post3,
    contentType:'Meetup',
    type:"🗓️ Meetup",
    title:'Finance & Investment Elite Social Mixer @Lujiazui',
    date:'Fri, 12 Oct, 2018',
    location:'Ahmedabad, India',
    userImage:profile3,
    username:'Ronal Jones'
  },
  {
    id:4,
    contentType:'Job',
    type:"💼️ Job",
    title:'Software Developer',
    company:'Innovaccer Analytics Private Ltd.',
    location:'Noida, India',
    userImage:profile4,
    username:'Joseph Gray'
  }
]




function App() {
  const [signup,setSignup] = useState(false);
  const [active,setActive] = useState('all');
  const [joined,setJoined] = useState(false);
  // const getData=async()=>{
  //   const patientDetails =await axios.get('https://619f39821ac52a0017ba467e.mockapi.io/patientDetails');
  //   const appointmentDetails = await axios.get('https://619f39821ac52a0017ba467e.mockapi.io/appointment_details');
  //   const files = await axios.get('https://619f39821ac52a0017ba467e.mockapi.io/Files');
  //   const doctorDetails = await axios.get('https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails');
  //   console.log(patientDetails.data[0]);
  //   console.log(appointmentDetails.data[0]);
  //   console.log(files.data[0]);
  //   console.log(doctorDetails.data[0]);
  // }
  // useEffect(() => {
  //   getData();
  // }, [])
  
  return (
    <div className="App">
      <Header setSignup={setSignup}/>
      <div>
        <div className='hero'>
          <img src={hero} alt='hero' />
          <div className='overlay'>
          <div className='group-name'>
          <h2>Computer Engineering</h2>
          <p>142,765 Computer Engineers follow this</p>
          </div>
          </div>
        </div>
        <div className='post-options'>
          <div className='post-options-1'>
          <button className={`${active==='all'?'active':''}`} onClick={()=>setActive('all')}>All Posts(32)</button>
          <button className={`${active==='article'?'active':''}`} onClick={()=>setActive('article')}>Article</button>
          <button className={`${active==='event'?'active':''}`} onClick={()=>setActive('event')}>Event</button>
          <button className={`${active==='edu'?'active':''}`} onClick={()=>setActive('edu')}>Education</button>
          <button className={`${active==='job'?'active':''}`} onClick={()=>setActive('job')}>Job</button>
          </div>
          <div className='post-options mobile'>
            <p>Posts(368)</p>
            <button>Filter:All</button>
          </div>
          <div className='post-options-2'>
            <button className='write'>Write a Post</button>
            <button className={!joined?'join':'leave'} onClick={()=>setJoined(prevState=>(!prevState))}>{!joined?'Join Group':'Leave Group'}</button>
          </div>
        </div>
        <div style={{display:'flex',gap:'8%'}}>
        <div className='post-container'>
          {postData.map(post=>
            <Post {...post} key={post.id}/>
            )}
        </div>
        <div className='location'>
          <div>
          <input type='text' placeholder='Enter your location' value={'Noida,India'} readOnly={true}/>
          <EditIcon2 style={{fill:'black !important',color:'black'}} />
          </div>
          <p style={{marginTop:'2em'}}>Your location will help us serve better and extend a personalised experience.</p>
        </div>
      </div>
      </div>
      {signup?
      <SignUp setSignup={setSignup}/>
      :null}
      <button className='write mobile'><EditIcon /></button>
      <button className='join mobile' onClick={()=>setJoined(prevState=>(!prevState))}>{!joined?'Join Group':'Leave Group'}</button>
    </div>
  );
}

export default App;
