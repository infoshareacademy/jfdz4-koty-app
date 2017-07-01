import React from 'react'
import YouTube from 'react-youtube'

const opts = {
    height: '390',
    width: '640',
    playerVars: {
        autoplay: 0,
    }
}

export default class Intro extends React.Component {


    render () {
        return (
            <div style={{textAlign: 'center'}}>
                Aplikacja, która pozwala na oszczędności!
                Wyszukujemy najlepszej jakości i w dobrej cenie produkty topowych marek.
                Wystarczy, że wpiszesz nazwę produktu, którego szukasz i możesz oddać się szalonym zakupom wśród rasowych kotów.
                Enjoy:)

                {/*<img style={{width: '100%', borderRadius:'20px'}} src="https://raw.githubusercontent.com/infoshareacademy/jfdz4-koty-app/txt_pic_button4intro/public/data/image/hajs.jpg" alt="kupa szmalu"/>*/}
                <div style={{borderRadius: "20px", border: '5px solid black', backgroundColor: 'black'}}>
                <YouTube
                    videoId="WRDBSKquWyw"
                    opts={opts}
                    onReady={this._onReady}
                />
                </div>
            </div>



        )
    }
}