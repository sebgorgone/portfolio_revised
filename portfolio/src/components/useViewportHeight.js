import { useState, useEffect } from "react";

function useViewportHeight() {
   const [viewport, setViewport] = useState(window.innerHeight);

   useEffect(() => {
      const handleResize = () => setViewport(window.innerHeight);

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
   }, []);

   return viewport;
   
}

export default useViewportHeight;