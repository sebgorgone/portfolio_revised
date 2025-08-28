
function EditWidget(props) {
   const src = props.src
   console.log(src)
   const videoStyle = props.videoStyle;

   const colorMode = props.colorMode;

   const textContent = props.textContent;

   const videoTitle = props.videoTitle


   return (
      <>
      <h1 style={{ textAlignLast: "center", fontFamily: "main", color: (colorMode ? "#6d3b47" : "#21263b"), fontSize: "4vw", marginLeft: "3em", marginRight: "1em"}}>{videoTitle}</h1>

      <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", margin: "1.6em", marginLeft: "5.5em", marginTop: "4em", backgroundColor: (colorMode ? "#373547" : "#33658a"), padding: "1em", borderRadius: "1em", boxShadow: `3px 3px 6px rgba(0, 0, 0, 0.15), 10px 10px 20px rgba(0, 0, 0, 0.1), 15px 15px 30px rgba(0, 0, 0, 0.05)`}}>
         <div style={{width: "30%"}}>
            <p  style={{margin: ".3em", textAlignLast: "left", fontFamily: "main", color: "white", fontSize: "calc(.5vw + .8em)"}}>
               {textContent}
            </p>
         </div>
         <div style={{width: "30%"}}>
            <video src={src} style={videoStyle} controls />
         </div>
      </div>
      </>
   )
}

export default EditWidget;