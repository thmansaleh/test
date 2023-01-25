import React ,{useRef}from 'react';

const User = () => {
    const name = useRef()
    const mobile = useRef()
    const qoumash = useRef()
    const type = useRef()
    const massege = useRef()
    function next() {
       

        if (name.current.value.length>0&mobile.current.value.length>0&qoumash.current.value.length>0&
            type.current.value.length>0) {
                window.location.href='/ar/next'
    
        } else {
          massege.current.style.top='3%';
            massege.current.innerText=' يرجى ادخال بيانات العميل '
            massege.current.style.background='red';
  setTimeout(function() {
    massege.current.style.top='-6%'
  },3000)
        }
        
    }



    return (
        <>
           <div class="header"> </div>
  <div class="title"> واجهة الخياط </div>
  <div class="body">
    
    <div class="pages">
    
      <button class="previous-btn" onClick={()=> window.location.href='/ar/search'}>عميل سابق</button>
        <button class="new-btn">جديد</button>
    </div>
    
    <hr class="line"/>
    
    
    <div class="inputs">
      
     <div class="creat-container d-rigth">
        <h5 >انشاء</h5>
     </div>
     
     <div className='d-rigth' >
    
    
    
     <div class="inline-block d-rigth t-rigth">
           <label for="" >اسم العميل</label>
         <input ref={name} type="text"/>
        
       </div>
       
        <div class="inline-block t-rigth d-rigth">
            <label  for="">رقم الجوال</label>
          <input ref={mobile} type="text"/>
        </div>
        
         <div class="inline-block t-rigth d-rigth">
             <label  for="">رقم القماش</label>
           <input ref={qoumash} type="text"/>
          
         </div>
         

              
     <div class="select d-rtl t-rigth">
       <label  for="type">نوع التفصيل</label>
       
       <select ref={type} id="typs">
         <option value=""></option>
         <option value="a">a</option>
         <option value="b">b</option>
         <option value="c">c</option>
       </select>
     </div>
    
         
         
  </div>


     

     
     
     <button onClick={()=> next() } class="new-btn save">حفظ والتالي</button>
     
      
      
    </div>
    
    <h3 ref={massege} class="alert">تم حفظ الملفات بنجاح</h3>
    
  </div> 
        </>
    );
}

export default User;
