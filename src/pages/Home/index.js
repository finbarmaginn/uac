import './style.css'
import { images } from './carouselImages';
import Carousel from 'nuka-carousel';

export const Home = () => {
    const items = []

    for(var i = 0; i < images.length; i++){
        items.push(<img src={images[i]} key={i} alt={`still${i}`} width="1920" height="1080" />)
    }

    return (
        <div>
            <section className="App-wrap">
            <Carousel
                withoutControls
                wrapAround={true}
                transitionMode="fade"
                autoplay={true}
                autoplayInterval={4000}
                speed={1000}
            >
                {items}
            </Carousel>

            <h3>Ghost Stories with the McPeakes</h3>

            <p>Internationally famous performers the McPeake family reunite to star in a
            special collection of three brand new stand-alone stories produced in lock-
            down. The McPeakes have been Joined by a cast of local actors, friends and
            creative talent, to bring each ten minute episode to life with songs, stories and
            poems of the supernatural.</p>

            <p>Released this December, Ghost Stories with the McPeakes, is a new three
            part anthology series featuring musical performances by the McPeake family
            and three original ghost stories written and directed by Eugene McPeake.</p>

            <p>The episodes will be released daily on the Urban Arts Centres YouTube
            channel in the run up to Christmas on the 22 nd , 23 rd and 24 th . With each
            episode available from 8pm.</p>

            <p>The three stories in the collection are:</p>
    
            <h4>The Banshees Lament</h4>

            <p>After a death in the district a young man hears a mysterious song, but when
            he tries to play it on his old wooden whistle he soon realises it just might be a
            tune that should never be played.</p>

            <h4>The Crawling Witch</h4>

            <p>A young boy is haunted by the memories of a day long ago when he visited a
            local monument, the grave of ’The Crawling Witch’.</p>

            <h4>Jack of the Lantern</h4>

            <p>The tradition of carving lanterns has its origin revealed when a string of local
            murders are committed, and a dangerous criminal continues to terrorise a
            community, even after death.</p>

            <p>Writer and director Eugene McPeake said: “The chance to work with my
            family and such a talented cast and crew has been a dream come true for me,
            and our producer John Dixon, has done an outstanding job bringing the
            scripts to the screen. With each episode filmed in a different style to reflect the
            different eras of classic ghost stories from film and TV.”</p>

            <p>Producer John Dixon added: “Lockdown has brought a lot of challenges to the
            production process. Luckily, our writer and director Eugene McPeake, is
            always ready to come up with original solutions. Not only did he have the
            means to record the McPeakes at home but he also brought his years of
            experience to the project. Eugene and the McPeakes are great to work with
            and together we’ve created a fantastic set of stories with mystery, surprises
            and some authentic traditional music just in time for Christmas.”</p>

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
        </div>
    )
}