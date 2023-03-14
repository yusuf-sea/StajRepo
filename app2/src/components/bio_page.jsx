import React, { Component } from 'react'
import './bio_page.css';


class Bio_page extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="title">
            Card Nero
          </div>

          <div className="main-card">
            <img className='Profile-Picture' src="https://image.winudf.com/v2/image/Y29tLm9ubGluZW1wM2t6LmFubmVtYXJpZS5hbV9zY3JlZW5fMF8xNTMyOTczOTU0XzAwMA/screen-0.jpg?fakeurl=1&type=.webp" alt="" />
            <div className="card-title">
              <div className="name-surname">
                Name
                <br />
                Surname
              </div>

              <div className="person-title">
                Ünvan
                <br />
                Şirket
              </div>
            </div>
          </div>

          <div className='links'>
            <a href='.' className="links-card">
              <div className='link-title'>
                <img className='link-icon' src="https://cdn-icons-png.flaticon.com/512/1828/1828959.png" alt="" />
                <br />
                Linkler
              </div>
            </a>
            <div className='mid-buttons'>
            <a href='.' className="links-card-2">
              <div className='link-title'>
                <img className='link-icon' src="https://cdn-icons-png.flaticon.com/512/1828/1828959.png" alt="" />
                <br />
                Profili Paylaş
              </div>
            </a>

            <a href='.' className="links-card-2">
              <div className='link-title'>
                <img className='link-icon' src="https://cdn-icons-png.flaticon.com/512/1828/1828959.png" alt="" />
                <br />
                Profili Görüntüle
              </div>
            </a>
            </div>
            <div className="mid-buttons">  
            <a href='.' className="links-card-2">
              <div className='link-title'>
                <img className='link-icon' src="https://cdn-icons-png.flaticon.com/512/1828/1828959.png" alt="" />
                <br />
                Entegrasyonlar
              </div>
            </a>

            <a href='.' className="links-card-2">
              <div className='link-title'>
                <img className='link-icon' src="https://cdn-icons-png.flaticon.com/512/1828/1828959.png" alt="" />
                <br />
                Rehbere Ekle
              </div>
            </a>
            </div>
            <a href='.' className="links-card">
              <div className='link-title'>
                <img className='link-icon' src="https://cdn-icons-png.flaticon.com/512/1828/1828959.png" alt="" />
                <br />
                İstatistikler
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
export default Bio_page;