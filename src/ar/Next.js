// import { useRef } from "react";
import React ,{useRef}from 'react';

const Next = () => {

    const input1 = useRef()
    const input2 = useRef()
    const input3= useRef()
    const input4 = useRef()
    const input5 = useRef()
    const input6 = useRef()
    const input7 = useRef()
    const input8 = useRef()
    const input9 = useRef()
    const input10 = useRef()
    const massege = useRef()
    function next() {
        massege.current.style.top='3%';

        if (input1.current.value.length>0&input2.current.value.length>0&input3.current.value.length>0&
            input4.current.value.length>0&
            input5.current.value.length>0&input6.current.value.length>0&input7.current.value.length>0&
            input8.current.value.length>0&input9.current.value.length>0&
            input10.current.value.length>0) {
                // window.location.href='ar/user'
                massege.current.innerText='تم الحفظ  بنجاح'
                massege.current.style.background='green';
    
        } else {
            massege.current.innerText='الرجا ادخال  كل التفاصيل'
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
            <div className='body'>
                <div class="pages ">

                    <button class="previous-btn" onClick={()=> window.location.href='/ar/search'}>عميل سابق</button>
                    <button class="new-btn" >جديد</button>
                </div>

                <hr class="line" />
                <div class="inputs">
                    <div class="creat-container d-rigth">
                        <h5 class="creat-btn">الجزء العلوي</h5>
                    </div>

                    <div className='body'>
                        <div class="inline-block">
                            <label for="">طول السترة </label>
                            <input ref={input1} type="text" />

                        </div>
                        <div class="inline-block">
                            <label for="">محيط الكتف </label>
                            <input ref={input2} type="text" />

                        </div>
                        <div class="inline-block">
                            <label for="">طول اليد </label>
                            <input ref={input3} type="text" />

                        </div>
                        <div class="inline-block">
                            <label for="">محيط الرقبة </label>
                            <input ref={input4} type="text" />

                        </div>
                        <div class="inline-block">
                            <label for="">مقاس القبوع </label>
                            <input ref={input5} type="text" />

                        </div>
                        <div class="inline-block">
                            <label for="">محيط الصدر</label>
                            <input ref={input6} type="text" />

                        </div>
                        <div class="inline-block">
                            <label for="">محيط الصدر </label>
                            <input ref={input7}  type="text" />

                        </div>
                    </div>
                    <h6>الملاحضات</h6>
                    <textarea rows="6" cols="40"></textarea>
                    <br />

                    <div class="inpuyts">
                        <div class="creat-container d-rigth">
                            <h5>الجزء السفلي</h5>
                        </div>

                        <div className='body'>
                            <div class="inline-block">
                                <label for="">طول البنطلون </label>
                                <input ref={input8} type="text" />

                            </div>
                            <div class="inline-block">
                                <label for="">كرسي الحزام </label>
                                <input ref={input9} type="text" />

                            </div>
                            <div class="inline-block">
                                <label for="">محيط الفخذ </label>
                                <input ref={input10} type="text" />

                            </div>
                            
                        </div>
                        <h6>الملاحضات</h6>
                        <textarea rows="6" cols="40"></textarea>


                    </div>

                        <button onClick={()=> next() } class="new-btn save">حفظ والتالي</button>

                </div>
                <h3 ref={massege} class="alert">تم حفظ الملفات بنجاح</h3>
            </div>

        </>
    );
}

export default Next;
