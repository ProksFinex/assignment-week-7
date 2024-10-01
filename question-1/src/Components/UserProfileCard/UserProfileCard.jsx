import React from 'react'
import "./UserProfileCard.css"
import profile_icon from "../assets/nora.jpg"

export const UserProfileCard = () => 
  return (
    <div className='upc'>
        <div className="gradiant"></div>
        <div className="profile-down">
            <img src={profile_icon} alt=""/>
            <div className="profile-title">Nora Fart <a className='profile-age'>34</a></div>
            <div className="profile-location">
                London
            </div>
            <div className="borderOne"></div>
            <div class="stats">
                <div>
                        <span>80K</span>
                        Followers
                    </div>
                    <div>
                        <span>803K</span>
                        Likes
                    </div>
                    <div>
                        <span>1.4K</span>
                        Photos
                </div>
            </div>
        </div>
    </div>
  )
}
