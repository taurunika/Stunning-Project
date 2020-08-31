import React from 'react'
import classes from '../assets/EffectsSection.module.css'
import UserPink from '../assets/images/user-pink.png'
import UserOrange from '../assets/images/user-orange.png'
import UserBlue from '../assets/images/user-blue.png'
import UserRed from '../assets/images/user-red.png'
import TickBlue from '../assets/images/tick-blue.png'
import TickGray from '../assets/images/tick-gray.png'

const EffectsSection = () => {
    return(
        <div className={classes.EffectsSection}>
            <div className={classes.EachEffect}>
                <div className={classes.EachEffectLeft}>
                    <img className={classes.Images} src={TickGray} alt='design_desc'/>
                    <span className={classes.EffectName}>Dmm design</span>
                </div>
                <div className={classes.EachEffectRight}>
                    <img className={classes.Images} src={UserPink} alt='user'/>
                    <span className={classes.Date}>20 Dec</span>
                    <span className={classes.Colors}></span>
                </div>
            </div>
            <div className={classes.EachEffectSec}>
                <div className={classes.EachEffectLeft}>
                    <img className={classes.Images} src={TickBlue} alt='design_desc'/>
                    <span className={classes.EffectName}>Blurr Animation</span>
                </div>
                <div className={classes.EachEffectRight}>
                    <img className={classes.Images} src={UserOrange} alt='user'/>
                    <span className={classes.Date}>20 Dec</span>
                    <span className={classes.Colors}></span>
                </div>
            </div>
            <div className={classes.EachEffect}>
                <div className={classes.EachEffectLeft}>
                    <img className={classes.Images} src={TickGray} alt='design_desc'/>
                    <span className={classes.EffectName}>Illustration</span>
                </div>
                <div className={classes.EachEffectRight}>
                    <img className={classes.Images} src={UserBlue} alt='user'/>
                    <span className={classes.Date}>20 Dec</span>
                    <span className={classes.Colors}></span>
                </div>
            </div>
            <div className={classes.EachEffect}>
                <div className={classes.EachEffectLeft}>
                    <img className={classes.Images} src={TickGray} alt='design_desc'/>
                    <span className={classes.EffectName}>Refunds</span>
                </div>
                <div className={classes.EachEffectRight}>
                    <img className={classes.Images} src={UserRed} alt='user'/>
                    <span className={classes.Date}>20 Dec</span>
                    <span className={classes.Colors}></span>
                </div>
            </div>
        </div>
    )
}
export default EffectsSection