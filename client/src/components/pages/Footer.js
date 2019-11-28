import React, { useEffect } from 'react';
import API from '../utils/API';

const styles = {
    container: {
        backgroundColor: "darkslategray",
        width: "100%",
        height: "5%"
    }
}

function Footer() {

    useEffect(() => {
        API.search("ironman").then(res => {
            console.log(res)
        })
    }, []);
    
    return (
        <React.Fragment>
            <div style={styles.container}>worl</div>
           
        </React.Fragment>
    )
}
export default Footer;



