import ProfilePic from '/src/assets/me.jpg';
import Styles from '/src/Components/index.module.css';
export default Card

function Card(){
    return (
        <>
        <div  className={Styles.card}>

            <img src={ProfilePic} alt="profile pic" className={Styles['image']}/>
            <h2 className= {Styles['card-head']}>Eve Dollars</h2>
            <p className= {Styles['card-text']}>I love logistics and Cyber security</p>
        </div>
        </>
    )
}