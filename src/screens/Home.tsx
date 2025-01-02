import { About } from '../components/about';
import { YoutubeVideo } from '../components/YoutubeVideo'
import { SocialLinks } from '../components/SocialLinks'

export const Home = () => {
    return (
        <main>
            <About/>
            <YoutubeVideo id="8J8wWxbAdFg"/>
            {/* <YoutubeVideo id="lmdjyU1YVLw"/>
            <YoutubeVideo id="Guk29oT7c5M"/> */}
            <SocialLinks/>
        </main>
    );
}