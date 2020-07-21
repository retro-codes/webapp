import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';
import Sdata from "./Sdata";
import Footer from "./Footer";

function ncard(val) {
    return(
        <Card 
        imgsrc={val.imgsrc} 
        title={val.title} 
        sname={val.sname} 
        link={val.links}
        description={val.description}
        />
    );
}

ReactDOM.render(
<>
<h1>Webseries to be Watched</h1>
{Sdata.map(ncard)}
<br>

</br>
<Footer />

</>,
document.getElementById('root')
);