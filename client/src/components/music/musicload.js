import Song from 'react-sound'

const MusicLoad=(handleSongLoading, handleSongPlaying, handleSongFinishedPlaying)=>{
    return(
        <div>
        <Sound
        url="Fate.mp3"
        playStatus={Sound.status.PLAYING}
        playFromPosition={300}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
        loop={true} />
        </div>
    )
}