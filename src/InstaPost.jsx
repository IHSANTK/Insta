import { useState } from "react"
import './Instapost.css'
export default function InstaPost(){
  
  const [likecount,setcount] = useState(0)
  const [liketre,settrue] = useState(false)
  const [comment,setcomment] =useState(false)
  const [input,setinput] =useState('')
  const [commentss,setcommentss] =useState([])

  const countlike = ()=>{
    setcount((prev)=>prev+1)
     
  }

  const settrues = ()=>{
    if(liketre===false){
      settrue(true)
    }else{
      settrue(false)
    }

  }

  const comments = ()=>{

    console.log(comment);
        if(comment==false){
          setcomment(true)
        }else{
          setcomment(false)
        }
  }

  const savecoment = ()=>{
       
    console.log("ook");
         if(input){
            const data = [...commentss,{text:input}]
            console.log(data);  
            setcommentss(data)
            setinput('')
         }

  }
    return(
   <div id="main" >
     
<div className="d-flex "><img className="mt-2 ms-3 mb-2" style={{width:'25px',height:'25px', borderRadius:'20px'}} src="https://res.cloudinary.com/dlzi9hete/image/upload/v1717159397/tycdluhvxezw2ae5dtm3.jpg" alt=""/> <h6 className="ms-3 mt-2 " style={{color:'white'}} >ihsan</h6></div>
   

      
     <img style={{width:'100%',height:'95%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEnBopu1ZPOr8Wl3vA3U2HpaWjNqtt3-4GwQ&s" alt="" />
     

     <div className="p-2 pe-3 " style={{background:' rgb(26, 25, 29)',display:'flex',justifyContent:'space-between'}}> 
        <button onClick={countlike}><i class="bi bi-heart me-1 mt-1"></i>{likecount}</button>
        
        <button onClick={comments} ><i class="bi bi-chat-left-dots"></i></button>

        <button onClick={settrues}><i class="bi bi-three-dots-vertical"></i></button>
     </div>
      {liketre===true&&
     <div>likes <h5 style={{positiona:'absalute',left:'10px'}}>{likecount}</h5></div>
      }
      {comment===true&&
     <div id="comments">
    
         <div style={{display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column'}}>
          {commentss.map((data,index)=>(
            

            <h6 style={{color:'white'}} key={index}>{data.text}</h6>
                 
          ))}
</div> 
<div id="inputdiv">
      <input type="text" value={input} placeholder="Add a comment" onChange={((e)=>setinput(e.target.value))} />
      <button onClick={savecoment}>Add</button>
      </div>
      </div>
      }

      
     </div>

    )
}