import React ,{useRef}from 'react';

const SearchEn = () => {

    const massege = useRef()
    const input = useRef()
    function search() {
        massege.current.style.top='3%';

        if (input.current.value.length>0) {
                // window.location.href='ar/user'
                massege.current.innerText='Searching......   '
                massege.current.style.background='green';
    
        } else {
            massege.current.innerText='please enter the customer name or phone number    '
            massege.current.style.background='red';
        }
        setTimeout(function() {
            massege.current.style.top='-6%'
          },3000)
        
    }
    return (
        <>
            <div class="header"> </div>
  <div class="title"> Tailor page  </div>
  <div class="body">
    
       
    <div class="pages rtl">
    
      <button class="new-btn">login </button>
        <button class="previous-btn" onClick={()=> window.location.href='/en/user'}>craete</button>
    </div>
    
    <hr class="line"/>

    <div class="inputs">
      
     
     <div  >
    
    
    
     <div class="inline-block">
           <label for="">Search by phone number   </label>
         <input ref={input} type="text"/>
        
       </div>
       


    
  </div>


     

     
     
     <button class="new-btn save" onClick={()=>search()}>Search</button>
     
      
      
    </div>
    
    
    <h3 ref={massege} class="alert">     </h3>
  </div>
        </>
    );
}

export default SearchEn;
