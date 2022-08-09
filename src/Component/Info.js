import Photo from '../images/4.png'
import Linkedin from '../images/Linkedin.png'
import Mail from '../images/Mail.png'


export default function Info(){
    return (
        <div className="info">
            <img src = {Photo} alt="" />
            <h2 className = "info-name">Sanskar Khandelwal</h2>
            <h5 className="info-profession">UX designer</h5>
             <a className='info-website' href="">Sanskar.com</a>
            <div className="buttons">
                <div className="email btn">
                    <img src= {Mail} alt="" />
                <a href="mailto: Sanskarkhandelwal336@gmail.com">Email</a>
                </div>
                <div className='linkedin btn'>
                <img src= {Linkedin} alt="" />
                <a href="https://www.linkedin.com/in/sanskarkhandelwal/">LinkedIn</a>
                </div>
               
            </div>
        </div>
    )
}