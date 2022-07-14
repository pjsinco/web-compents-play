console.log('hiya');

class PopupInfo extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const wrapSpan = document.createElement('span')
    wrapSpan.classList.add('wrap')

    const imgSpan = document.createElement('span')
    imgSpan.setAttribute('tabindex', '0')
    imgSpan.classList.add('icon')

    const img = document.createElement('img')
    let imgUrl
    if (this.hasAttribute('img')) {
      imgUrl = this.getAttribute('img')
    } else {
      imgUrl = 'images/default.png'
    }

    img.setAttribute('src', imgUrl);
    imgSpan.appendChild(img);
    
    const infoSpan = document.createElement('span')
    infoSpan.classList.add('info')
    infoSpan.textContent = this.dataset.text

    const style = document.createElement('style');
    style.textContent = `
      .wrap {
        position: relative;
      }

      .info {
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
      }

      img {
        width: 1.2rem;
      }

      .icon:hover + .info,
      .icon:focus + .info {
        opacity: 1;
      }
    `

    wrapSpan.appendChild(imgSpan)
    wrapSpan.appendChild(infoSpan)

    shadow.appendChild(style)
    shadow.appendChild(wrapSpan)
  }
}

customElements.define('popup-info', PopupInfo)
