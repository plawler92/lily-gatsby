import * as React from "react"
import Layout from "../components/layout"
import About from "../components/about"
import Services from "../components/services"
import ProductGrid from "../components/productgrid"
import LilyProfile from "../images/LilyProfile4.jpg"

// markup
const Index = () => {
  const mystyle = {
    backgroundColor: "#000000",
    maxWidth: "605px",
    mindWidth: "325px"
  }

  return (
    <Layout title="Home">
      <section id="about" className="max-w-lg pb-4">
        <About />
      </section>
      <section id="services">
        <Services />
        <div className="py-4">
        <h1>Here's a sample of my process:</h1>
        <blockquote className="tiktok-embed" 
          cite="https://www.tiktok.com/@lilypozos/video/6922499232167464198" 
          data-video-id="6922499232167464198" 
          style={mystyle}
           > 
           {/* style={{max-width: "605px", min-width: "325px"}} */}

          <section> 
          <a target="_blank" title="@lilypozos" 
          href="https://www.tiktok.com/@lilypozos">@lilypozos
          </a> 
          <p>I did it! Like and comment so I can reach to more people and start my small business! 
          <a title="boseallout" target="_blank" href="https://www.tiktok.com/tag/boseallout">##BoseAllOut</a> 
          <a title="smallbusinesscheck" target="_blank" href="https://www.tiktok.com/tag/smallbusinesscheck">##smallbusinesscheck
          </a> 
          <a title="cricut" target="_blank" href="https://www.tiktok.com/tag/cricut">
          ##cricut</a> 

          <a title="coffee" target="_blank" href="https://www.tiktok.com/tag/coffee">
          ##coffee</a></p> 

          <a target="_blank" title="♬ CRAFT - OFEKNIV" 
          href="https://www.tiktok.com/music/CRAFT-6732297013599143937">♬ CRAFT - OFEKNIV
          </a> 
          </section> 
        </blockquote> 
        </div>
      </section>
      <section id="gallery">
        <ProductGrid />
      </section>
      <script async src="https://www.tiktok.com/embed.js"></script>
      {/* <div className="w-screen h-screen bg-lily-profile"></div> */}
      {/* <img src={'/images/LilyProfile4.jpg'} /> */}
    </Layout>
  );
};

export default Index;
