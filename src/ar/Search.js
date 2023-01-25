import React ,{useRef}from 'react';

const Search = () => {

    const massege = useRef()
    const input = useRef()
    function search() {
        massege.current.style.top='3%';

        if (input.current.value.length>0) {
                // window.location.href='ar/user'
                massege.current.innerText='جاري البحث....   '
                massege.current.style.background='green';
    
        } else {
            massege.current.innerText='يرجى ادخال اسم او رقم هاتف العميل'
            massege.current.style.background='red';
        }
        setTimeout(function() {
            massege.current.style.top='-6%'
          },3000)
        
    }
    return (
        <>
            <div class="header"> </div>
  <div class="title"> واجهة الخياط </div>
  <div class="body">
    
       
    <div class="pages">
    
      <button class="new-btn">عميل سابق</button>
        <button class="previous-btn" onClick={()=> window.location.href='/ar/user'}>جديد</button>
    </div>
    
    <hr class="line"/>

    <div class="inputs">
      
     
     <div  >
    
    
    
     <div class="inline-block">
           <label for="">البحث برقم الهاتف </label>
         <input ref={input} type="text"/>
        
       </div>
       


    
  </div>


     

     
     
     <button class="new-btn save" onClick={()=>search()}>بحث</button>
     
      
      
    </div>
    
    
    <h3 ref={massege} class="alert"> الرجاء ادخال البيانات  </h3>
  </div>
        </>
    );
}

export default Search;
