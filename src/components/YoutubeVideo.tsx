
type VideoProps = {
    id: String
}

export const YoutubeVideo : React.FC<VideoProps> = ({ id }) => {
    return (
        <section>
            <iframe width="100%" height="315" 
            src={"https://www.youtube.com/embed/"+ id +"?si=XTBt AwAIENAuz5de"} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            </iframe>
        </section>
    );
}