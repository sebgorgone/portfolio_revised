
function EditWidget(props) {
   const src = props.src
   console.log(src)
   const videoStyle = props.videoStyle;

   const colorMode = props.colorMode;

   const textContent = props.textContent;


   return (
      <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", margin: "1.6em", marginLeft: "4.5em", marginTop: "4em", backgroundColor: (colorMode ? "#373547" : "#487b9e"), padding: "1em", borderRadius: "10%"}}>
         <div style={{width: "30%"}}>
            <p  style={{margin: ".3em", textAlignLast: "left", fontFamily: "main", color: "white", fontSize: "calc(.5vw + .8em)"}}>
               {textContent}
            </p>
         </div>
         <div style={{width: "30%"}}>
            <iframe src={src} style={videoStyle}/>
         </div>
      </div>
   )
}

export default EditWidget;