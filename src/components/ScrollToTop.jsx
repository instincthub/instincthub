import {useLayoutEffect} from "react";

const ScrollToTop = () =>{
    useLayoutEffect(() => { // Scroll to top on page render
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'instant',
        });
      }, []); 
}

export default ScrollToTop