import poster from './Poster With Text Test copy.jpg'
import './style.css'
export const Home = () => {
    return (
        <div>
            <section className="App-wrap">
                <img src={poster} alt="poster" />
                {/* <div className='embed-container'>
                    <iframe 
                        src='https://player.vimeo.com/video/448581653' 
                        frameBorder='0' 
                        title="Jack of the Lantern" 
                        webkitallowfullscreen="true" 
                        mozallowfullscreen="true"
                        allowFullScreen
                    ></iframe>
                </div> */}
           </section>
           {/* <div className="vimeo-wrapper">
                <iframe
                    src="https://player.vimeo.com/video/448581653?background=1&muted=1&autoplay=1#t=0m21s&loop=1&byline=1&title=1" 

                    // &autoplay=1&loop=1&byline=0&title=0
                    width="640" 
                    height="360" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen" 
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen
                    title="trailor"
                >
                </iframe>
            </div>  */}
        </div>
    )
}