
import GitHub from '../images/GitHub.png'
import LinkedIn from '../images/Linkedin_footer.png'
import Twitter from '../images/Twitter.png'

export default function Footer(){
    return (
        <div className="footer">

            <a href="https://Twitter.com/SanskarTweets">
            <img src={Twitter} alt="" />

            </a>
            <a href="https://github.com/Sanskar-khandelwal">
            <img src={GitHub} alt="" />

            </a>

            <a href="">
            <img src= {LinkedIn} alt="https://www.linkedin.com/in/sanskarkhandelwal/" />
            </a>
        </div>
    )
}