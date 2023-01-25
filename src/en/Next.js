// import { useRef } from "react";
import React ,{useRef}from 'react';

const NextEn = () => {

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
                massege.current.innerText='Saved successfully'
                massege.current.style.background='green';
    
        } else {
            massege.current.innerText='Pleas enter details '
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
            <div className='body'>
                <div class="pages rtl">

                    <button class="previous-btn" onClick={()=> window.location.href='/en/search'}>login </button>
                    <button class="new-btn" >create</button>
                </div>

                <hr class="line" />
                <div class="inputs ltr">
                    <div class="creat-container ltr">
                        <h5 class="creat-btn">upper part </h5>
                    </div>

                    <div className='body'>
                        <div class="inline-block">
                            <label for="">tall  </label>
                            <input ref={input1} type="text" />

                        </div>
                        <div class="inline-block">
                            <label for="">shoulder  </label>
                            <input ref={input2} type="text" />

                        </div>
                        <div class="inline-block">
                            <label for="">hands tall  </label>
                            <input ref={input3} type="text" />

                        </div>
                        <div class="inline-block">
                            <label for="">neck  </label>
                            <input ref={input4} type="text" />

                        </div>
                        <div class="inline-block">
                            <label for="">###  </label>
                            <input ref={input5} type="text" />

                        </div>
                        <div class="inline-block">
                            <label for="">chest </label>
                            <input ref={input6} type="text" />

                        </div>
                        <div class="inline-block">
                            <label for="">chest  </label>
                            <input ref={input7}  type="text" />

                        </div>
                    </div>
                    <h6>الملاحضات</h6>
                    <textarea rows="6" cols="40"></textarea>
                    <br />

                    <div class="inpuyts">
                        <div class="creat-container ltr">
                            <h5>lower part </h5>
                        </div>

                        <div className='body'>
                            <div class="inline-block">
                                <label for="">trouser length  </label>
                                <input ref={input8} type="text" />

                            </div>
                            <div class="inline-block">
                                <label for="">belt  </label>
                                <input ref={input9} type="text" />

                            </div>
                            <div class="inline-block">
                                <label for="">thigh  </label>
                                <input ref={input10} type="text" />

                            </div>
                            
                        </div>
                        <h6>Notes</h6>
                        <textarea rows="6" cols="40"></textarea>


                    </div>

                        <button onClick={()=> next() } class="new-btn save">Save </button>

                </div>
                <h3 ref={massege} class="alert"> </h3>
            </div>

        </>
    );
}

export default NextEn;
