import React from 'react';

function Post(props) {
    const render =()=>{
        if(props.contentType==='Article'){
            return(
                <>
                    {props.image?
                    <img src={props.image} alt='post' />:
                    null
                    }
                    <div className='main-content'>
                    <p className='post-type'>{props.type}</p>
                    <div className='title-bar'>
                    <h2>{props.title}</h2>
                    <div className='menu'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    </div>
                    <p className='post-content'>{props.content}</p>
                    <div className='post-footer'>
                    <div className='user-info'>
                        <img src={props.userImage} alt='user' />
                        <h5>{props.username}</h5>
                    </div>
                    <div>
                        <p className='views'>1.4k views</p>
                    </div>
                    </div>
                    </div>
                </>
            )
        }
        if(props.contentType==='Education'){
            return(
                <>
                    {props.image?
                    <img src={props.image} alt='post' />:
                    null
                    }
                    <div className='main-content'>
                    <p className='post-type'>{props.type}</p>
                    <div className='title-bar'>
                    <h2>{props.title}</h2>
                    <div className='menu'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    </div>
                    <p className='post-content'>{props.content}</p>
                    <div className='post-footer'>
                    <div className='user-info'>
                        <img src={props.userImage} alt='user' />
                        <h5>{props.username}</h5>
                    </div>
                    <div>
                        <p className='views'>1.4k views</p>
                    </div>
                    </div>
                    </div>
                </>
            )
        }
        if(props.contentType==='Meetup'){
            return(
                <>
                    {props.image?
                    <img src={props.image} alt='post' />:
                    null
                    }
                    <div className='main-content'>
                    <p className='post-type'>{props.type}</p>
                    <div className='title-bar'>
                    <h2>{props.title}</h2>
                    <div className='menu'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    </div>
                    <div className='post-content' style={{display:'flex',justifyContent:'start',gap:'20%',alignItems:'center'}}>
                        <p style={{fontWeight:'700'}}>{props.date}</p>
                        <p style={{fontWeight:'700'}}>{props.location}</p>
                    </div>
                    <button style={{width:'100%',color:'#E56135',fontWeight:'600',fontSize:'13px',backgroundColor:'white',border: '0.7px solid #A9AEB8',borderRadius:'8px',padding:'0.5em'}}>Visit Website</button>
                    <div className='post-footer'>
                    <div className='user-info'>
                        <img src={props.userImage} alt='user' />
                        <h5>{props.username}</h5>
                    </div>
                    <div>
                        <p className='views'>1.4k views</p>
                    </div>
                    </div>
                    </div>
                </>
            )
        }
        if(props.contentType==='Job'){
            return(
                <>
                    {props.image?
                    <img src={props.image} alt='post' />:
                    null
                    }
                    <div className='main-content'>
                    <p className='post-type'>{props.type}</p>
                    <div className='title-bar'>
                    <h2>{props.title}</h2>
                    <div className='menu'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    </div>
                    <div className='post-content' style={{display:'flex',justifyContent:'start',gap:'20%',alignItems:'center'}}>
                        <p style={{fontWeight:'700'}}>{props.company}</p>
                        <p style={{fontWeight:'700'}}>{props.location}</p>
                    </div>
                    <button style={{width:'100%',color:'#02B875',fontWeight:'600',fontSize:'13px',backgroundColor:'white',border: '0.7px solid #A9AEB8',borderRadius:'8px',padding:'0.5em'}}>Apply on TimesJob</button>
                    <div className='post-footer'>
                    <div className='user-info'>
                        <img src={props.userImage} alt='user' />
                        <h5>{props.username}</h5>
                    </div>
                    <div>
                        <p className='views'>1.4k views</p>
                    </div>
                    </div>
                    </div>
                </>
            )
        }
    }
  return (
    <div className='post'>
        {render()}
    </div>
  )
}

export default Post;