import React ,{useRef}from 'react';

const UserEn = () => {
    const name = useRef()
    const mobile = useRef()
    const qoumash = useRef()
    const type = useRef()
    const massege = useRef()
    function next() {
       

        if (name.current.value.length>0&mobile.current.value.length>0&qoumash.current.value.length>0&
            type.current.value.length>0) {
                window.location.href='/en/next'
    
        } else {
          massege.current.style.top='3%';
            massege.current.innerText='pleas complite form'
            massege.current.style.background='red';
  setTimeout(function() {
    massege.current.style.top='-6%'
  },3000)
        }
        
    }



    return (
        <>
           <div class="header"> </div>
  <div class="title"> Tailor page  </div>
  <div class="body">
    
    <div class="pages rtl">
    
      <button class="previous-btn" onClick={()=> window.location.href='/en/search'}>login </button>
        <button class="new-btn">create</button>
    </div>
    
    <hr class="line"/>
    
    
    <div class="inputs">
      
     <div class="creat-container ltr ">
        <h5 >Create</h5>
     </div>
     
     <div className=' ltr ' >
    
    
    
     <div class="inline-block ltr t-rigth">
           <label for="" >Customer name </label>
         <input ref={name} type="text"/>
        
       </div>
       
        <div class="inline-block ltr d-rigth">
            <label  for="">Phone </label>
          <input ref={mobile} type="text"/>
        </div>
        
         <div class="inline-block ltr d-rigth">
             <label  for="">cloth </label>
           <input ref={qoumash} type="text"/>
          
         </div>
         

              
     <div class="select ltr t-l">
       <label  for="type">type </label>
       
       <select ref={type} id="typs">
         <option value=""></option>
         <option value="a">a</option>
         <option value="b">b</option>
         <option value="c">c</option>
       </select>
     </div>
    
         
         
  </div>


     

     
     
     <button onClick={()=> next() } class="new-btn save">Next </button>
     
      
      
    </div>
    
    <h3 ref={massege} class="alert"></h3>
    
  </div> 
        </>
    );
}

export default UserEn;
