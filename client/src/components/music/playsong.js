import Sound from 'react-sound'


const PlaySong = (handleSongLoading, handleSongPlaying, handleSongFinishedPlaying) => {


    return(
        <div>
        <Sound
        url="Cantina-band.mp3"
        playStatus={Sound.status.PLAYING}
        playFromPosition={300}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
        loop={true} />
        </div>
    )
}
export default PlaySong