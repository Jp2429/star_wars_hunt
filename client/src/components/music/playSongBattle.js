import Sound from 'react-sound'


const PlaySongBattle = (handleSongLoading, handleSongPlaying, handleSongFinishedPlaying) => {


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
export default PlaySongBattle