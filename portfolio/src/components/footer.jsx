
function Footer (props) {
   const colorMode = props.colorMode;

   return(
      <div style={{width: "100vw", height: "120px", backgroundColor: (colorMode ? "#282f44" : "#719fb8"), marginTop: "6em"}}>
      </div>
   )
}

export default Footer;