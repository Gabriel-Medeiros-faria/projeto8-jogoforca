import "./App.css"
import imagem0 from "./img/forca0.png"
import imagem1 from "./img/forca1.png"
import imagem2 from "./img/forca2.png"
import imagem3 from "./img/forca3.png"
import imagem4 from "./img/forca4.png"
import imagem5 from "./img/forca5.png"
import imagem6 from "./img/forca6.png"






function ColocarLetraNaTela(){

}

function Letras(props) {
    console.log(props)
    return (
        <>{props.texto}</>
    )
}

export default function App() {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    const letrasParaMostrar = [
        { letra: 'a' }, { letra: 'b' }, { letra: 'c' }, { letra: 'd' }, { letra: 'e' }, { letra: 'f' }, { letra: 'g' }, { letra: 'h' }, { letra: 'i' }, { letra: 'j' }, { letra: 'k' }, { letra: 'l' }, { letra: 'm' }, { letra: 'n' }, { letra: 'o' }, { letra: 'p' }, { letra: 'q' }, { letra: 'r' }, { letra: 's' }, { letra: 't' }, { letra: 'u' }, { letra: 'v' }, { letra: 'w' }, { letra: 'x' }, { letra: 'y' }, { letra: 'z' }
    ]
    return (
        <div className='container'>
            <div className='parte-cima'>
                <div className='img-forca'>
                    <img src={imagem0} alt='' />
                </div>

                <div className='escolher-palavra'>
                    escolher palavra
                </div>
            </div>
            <div className="parte-baixo">
                <div className="letras-caixa">
                    <ul className="letras">
                        {letrasParaMostrar.map((l) => <li onClick={ColocarLetraNaTela}>{<Letras texto={l.letra}/>}</li>)}
                    </ul>
                </div>
                <div className="resposta">

                </div>
            </div>
        </div>
    )
}   