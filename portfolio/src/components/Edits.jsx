import useViewport from "./useViewport";
import useViewportHeight from "./useViewportHeight";
import EditWidget from "./EditWidget";

function Edits(props) {
   const colorMode = props.colorMode;
   const vpW = useViewport();
   const vpH = useViewportHeight();

   return(
      <>
       <h1 style={{margin: ".3em", marginLeft: (vpW > 500 ? "1em" : "2em"),marginTop: "1.5em", textAlignLast: "center", fontFamily: "main", color: (colorMode ? "#6d3b47" : "#21263b"), fontSize: "calc(5vw + 2em)"}}>Video Editing</h1>

      <p  style={{margin: "1em", marginLeft: "5em", textAlignLast: "left", fontFamily: "main", color: "white", fontSize: "calc(1vw + 1.2em)"}}>
         Since Ive had access to a computer, I have always put together video parts of everthing. Video games, skiing, skating, and then later on skydiving. It really didnt matter. If i had media it was meant to be put into a Non-Linear-Editor.
      </p>

       <p  style={{margin: "1em", marginLeft: "5em", textAlignLast: "left", fontFamily: "main", color: "white", fontSize: "calc(1vw + 1.2em)"}}>
         I make these for fun to post on my instagram
      </p>

      <br />
      <br />

      <EditWidget colorMode={colorMode} src={'https://res.cloudinary.com/djuul0yr0/video/upload/v1756240355/Collegiates2024EditCOMPR_skypfr.mov'} videoStyle={{width: "100%", border: "none", height: "calc(.5 * 100vw", borderRadius: "1em"}} textContent="This is an edit I made after the 2024 skydiving collegiates nationals. Featuring jumpers from schools across the country" videoTitle='Collegiates Edit'/>
      <EditWidget colorMode={colorMode} src={'https://res.cloudinary.com/djuul0yr0/video/upload/v1756241416/UCSDInvolvementReel2024COMPR_ljjnom.mov'} videoStyle={{width: "100%", border: "none", height: "calc(.42 * 100vw", borderRadius: "1em"}} textContent="I put together this video for UCONN Skydiving to promote the club to students on campus" videoTitle="UCSD Involvement"/>
      <EditWidget colorMode={colorMode} src={'https://res.cloudinary.com/djuul0yr0/video/upload/v1756242432/24YearEndCOMPR_u4khqx.mov'} videoStyle={{width: "100%", border: "none", height: "calc(.5 * 100vw", borderRadius: "1em"}} textContent="My 'year end' edit for 2024" videoTitle="My 'Year End' Edit 24'"/>
      <EditWidget colorMode={colorMode} src={'https://res.cloudinary.com/djuul0yr0/video/upload/v1756242921/24SeasonSDEditCOMPR_fnqdrk.mov'} videoStyle={{width: "100%", border: "none", height: "calc(.32 * 100vw", borderRadius: "1em"}} textContent="My season end edit for skydiving 2024" videoTitle="Skydiving Season Edit 24'"/>
      <EditWidget colorMode={colorMode} src={'https://res.cloudinary.com/djuul0yr0/video/upload/v1756243289/TandemWeekendFall24COMPR_tx0aap.mov'} videoStyle={{width: "100%", border: "none", height: "calc(.3 * 100vw", borderRadius: "1em"}} textContent="This is an edit I made for the UCONN skydiving team for their 'tandem weekend' event they hold for the students at UCONN" videoTitle="Tandem Weekend Edit Fall 24'"/>
      <EditWidget colorMode={colorMode} src={'https://res.cloudinary.com/djuul0yr0/video/upload/v1756243586/2324SeasonSkiEditCOMPR_cklxvo.mov'} videoStyle={{width: "100%", border: "none", height: "calc(.4 * 100vw", borderRadius: "1em"}} textContent="My 'season end' edit for the 23/24 season" videoTitle="2023/24 ski season edit"/>
      <EditWidget colorMode={colorMode} src={'https://res.cloudinary.com/djuul0yr0/video/upload/v1756243918/MarchSnowdump24EditCOMPR_q2ysv0.mov'} videoStyle={{width: "100%", border: "none", height: "calc(.4 * 100vw", borderRadius: "1em"}} textContent="Made this edit after it snowed 26 inches overnight; the most the mountains had seen all season. So we were excited." videoTitle="2024 March snowstorm edit"/>
      <EditWidget colorMode={colorMode} src={'https://res.cloudinary.com/djuul0yr0/video/upload/v1756244156/23YearEndCOMPR_hl0ppp.mov'} videoStyle={{width: "100%", border: "none", height: "calc(.4 * 100vw", borderRadius: "1em"}} textContent="My 'Year End' Edit 2023" videoTitle="2023 Year End edit"/>

      </> 
   )
}

export default Edits