import React from 'react';
import ReactDOM from 'react-dom';

function Card(props) {
  return (
    <>
    <div className="cards">
      <div className="card">
        <img 
          src={props.imgsrc}
          alt="mypic"
          className="card_img"
        />
        <div className="card_ino">
  <span className="card_category">{props.title}</span>
  <h3 className="card_title">{props.sname}</h3>
          <a
            href=""
            target="_blank"
            >
              <button>Watch Now!</button>
            </a>
            </div>
            </div>
            </div>
            </>
  );
}
ReactDOM.render(
<>
<Card imgsrc="https://cdn-media.festival-cannes.com/film_film/0001/68/thumb_67504_film_film_big.jpg"
title="Amazon Prime Original Series"
sname="Parasite"
link="https://www.primevideo.com/detail/amzn1.dv.gti.3eb85fb1-6cb3-1c67-b86a-38dfbce28c23?ref=dvm_tt_wbr_pvs_piv&tag=imdbtag_tt_wbr_pvs_piv_in-21"
/>
<Card />
<Card />
</>,
document.getElementById('root')
);