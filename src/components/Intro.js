import React from 'react'
import YouTube from 'react-youtube'

const opts = {
        width: '100%',
    playerVars: {
        autoplay: 0,
        modestbranding: 1,
        showinfo: 0,
        rel: 0,
    }
}

export default class Intro extends React.Component {


    render () {
        return (
            <div style={{textAlign: 'center'}}>
                <h1> PORÓWNYWARKA KOTY APP </h1>
                <p> Aplikacja, która pozwala na oszczędności!</p>
                <p> Wyszukujemy najlepszej jakości i w dobrej cenie produkty topowych marek.</p>
                <p>Wystarczy, że wpiszesz nazwę produktu, którego szukasz i możesz oddać się szalonym zakupom wśród rasowych kotów.</p>
                <p> Enjoy:)</p>

                {/*<img style={{width: '100%', borderRadius:'20px'}} src="https://raw.githubusercontent.com/infoshareacademy/jfdz4-koty-app/txt_pic_button4intro/public/data/image/hajs.jpg" alt="kupa szmalu"/>*/}
                <div>
                <YouTube
                    videoId="rkwsOjIiEO0"
                    opts={opts}
                    onReady={this._onReady}
                />
                </div>
            </div>



        )
    }
}