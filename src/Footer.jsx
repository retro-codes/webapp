import React from 'react';
import ScriptTag from 'react-script-tag';

function Footer() {
    return (
        <>
        const Demo = props => (
            <ScriptTag type="text/javascript" src="./footer.js"/>
        )
        <div id="myNav" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <div class="overlay-content">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
        </div>
        </div>
        <span onclick="openNav()">open</span>

        </>
    );
}

export default Footer;