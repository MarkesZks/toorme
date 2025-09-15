import React from "react";


import "./style.scss";

const HomeHero: React.FC = () => {

const userName = 'gabriel'
  return (
   <section>
    <div>
        <img src="" alt="" />
        <div>
            <h1>Olá {userName}</h1>
            <p>Para onde vamos agora ?</p>
            <input type="text" placeholder="Digite seu destino..." />
            <a>Me surpreenda!</a>
        </div>
    </div>
    <div>
        
    </div>
   </section>
  );
};

export default HomeHero;
