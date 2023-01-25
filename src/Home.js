import React from 'react';

const Home = () => {
    return (
        <>
            <div class="header"> </div>

  <div class="body home ">
    

    <button onClick={()=> window.location.href='/en/user'}>English</button>
    <button onClick={()=> window.location.href='/ar/user'}>عربي</button>
    
  </div>



    

        </>
    );
}

export default Home;
