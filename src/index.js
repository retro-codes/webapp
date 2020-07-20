import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card";
import "./index.css";
import Footer from "./Footer";


ReactDOM.render(
<>
<h1 className="heading_style">List of top 3 Amazon Original Series</h1>
<Card imgsrc="https://cdn-media.festival-cannes.com/film_film/0001/68/thumb_67504_film_film_big.jpeg"
title="Amazon Prime Original Series"
sname="Parasite"
link="https://www.primevideo.com/detail/amzn1.dv.gti.3eb85fb1-6cb3-1c67-b86a-38dfbce28c23?ref=dvm_tt_wbr_pvs_piv&tag=imdbtag_tt_wbr_pvs_piv_in-21"
/>
<Card imgsrc="https://images.indianexpress.com/2020/07/breathe-2-review-1200.jpg"
title="Amazon Prime Original Series"
sname="Breathe: Into the shadows"
link="https://www.primevideo.com/detail/0TRG6QSFTYWRDB885FMYJOJO9X/ref=atv_hm_hom_c_8pZiqd_2_4?tag=imdbtag_tt_wbr_pvs_piv_in-21"
 />
<Card imgsrc="https://pbs.twimg.com/media/DUcWJ9iU0AYdPzW.jpg"
title="Amazon Prime Original Series"
sname="Breathe"
link="https://www.primevideo.com/detail/0LPIP7N3YF6AF0641BL3I71ULB/ref=atv_hm_hom_c_8pZiqd_2_3?tag=imdbtag_tt_wbr_pvs_piv_in-21"
/>
<Card imgsrc="https://i.pinimg.com/736x/cf/13/b6/cf13b648a64e38f34be4dcd76ac5bd60.jpg"
title="Amazon Prime Original Series"
sname="Mirzapur"
link="https://www.primevideo.com/detail/0PDOKMV9CRLOMO5EUKNCUJLG4Q/ref=atv_hm_hom_c_dfByPd_10_3?tag=imdbtag_tt_wbr_pvs_piv_in-21"
/>
<Footer />
</>,
document.getElementById('root')
);