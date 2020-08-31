import React from 'react'
import classes from '../assets/SubSection.module.css'
import UserPink from '../assets/images/user-pink.png'
import UserOrange from '../assets/images/user-orange.png'
import UserBlue from '../assets/images/user-blue.png'
import UserRed from '../assets/images/user-red.png'
import TickBlue from '../assets/images/tick-blue.png'
import TickGray from '../assets/images/tick-gray.png'

const SubSection = () => {
    return(
        <div className={classes.SubSection}>
            <div className={classes.colDesc}>
                <div className={classes.colDescLeft}>
                    <img className={classes.Images} src={TickGray} alt='design_desc'/>
                    <span className={classes.EffectName}>Dmm design</span>
                </div>
                <div className={classes.colDescRight}>
                    <img className={classes.Images} src={UserPink} alt='user'/>
                    <span className={classes.Date}>20 Dec</span>
                    <span className={classes.Colors}></span>
                </div>
            </div>
            <div className={classes.colDescSec}>
                <div className={classes.colDescLeft}>
                    <img className={classes.Images} src={TickBlue} alt='design_desc'/>
                    <span className={classes.EffectName}>Blurr Animation</span>
                </div>
                <div className={classes.colDescRight}>
                    <img className={classes.Images} src={UserOrange} alt='user'/>
                    <span className={classes.Date}>20 Dec</span>
                    <span className={classes.Colors}></span>
                </div>
            </div>
            <div className={classes.colDesc}>
                <div className={classes.colDescLeft}>
                    <img className={classes.Images} src={TickGray} alt='design_desc'/>
                    <span className={classes.EffectName}>Illustration</span>
                </div>
                <div className={classes.colDescRight}>
                    <img className={classes.Images} src={UserBlue} alt='user'/>
                    <span className={classes.Date}>20 Dec</span>
                    <span className={classes.Colors}></span>
                </div>
            </div>
            <div className={classes.colDesc}>
                <div className={classes.colDescLeft}>
                    <img className={classes.Images} src={TickGray} alt='design_desc'/>
                    <span className={classes.EffectName}>Refunds</span>
                </div>
                <div className={classes.colDescRight}>
                    <img className={classes.Images} src={UserRed} alt='user'/>
                    <span className={classes.Date}>20 Dec</span>
                    <span className={classes.Colors}></span>
                </div>
            </div>
        </div>
    )
}
export default SubSection