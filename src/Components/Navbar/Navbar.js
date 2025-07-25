import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="nav_content_wrapper">
        <div className="nav_main_diff">
            <div className="logo">
                <h2>G gist</h2>
            </div>
            <ul className="nav_list">
                <li>Home</li>
                <li>Movies</li>
                <li>Community</li>
                <li>Discussions</li>
            </ul>
        </div>

        <div>
            <ion-icon name="search-outline"></ion-icon>
            <ion-icon name="notifications-outline"></ion-icon>
            <div className="user_img_wrapper">
                <img src="" alt="" className="user_img" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar