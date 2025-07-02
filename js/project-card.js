class Card extends HTMLElement {
  static lastCardNumber = 0
  constructor() {
    super()
    this.index = Card.lastCardNumber + 1
    Card.lastCardNumber = this.index

    const href = `${this.getAttribute('dir')}/${this.getAttribute('index') || 'index.html'}`
    const badges = this.getAttribute('badges').split(',')
    const badgesHTML = badges.map((badge) => `<span class="card__badge">${badge}</span>`).join(' ')

    const shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = `
      <link rel="stylesheet" href="./css/style.css">
      <article class="card">
        <div class="card__content">
          <a class="card__image-link" href="${href}" title="${this.getAttribute('title') || ''}">
            <img class="card__image" src="./${this.getAttribute('dir')}/screenshot.png" alt="Article illustration" title="${this.getAttribute('title') || ''}">
          </a>
          <p class="card__badges">
            <span class="card__badge">Project ${this.index}</span>
            ${badgesHTML}
          </p>
          <a class="card__title" href="${href}">${this.getAttribute('title') || ''}</a>
          <div class="card__description">
            ${this.getAttribute('description') || ''}
          </div>
          <a class="card__author" href="http://darellanodev.github.io/" title="Darellanodev">
            <img src="./img/darellanodev_avatar.webp" alt="Darellanodev" class="card__author-image">
            <span class="card__author-name">Darellanodev</span>
          </a>
        </div>
      </article>
    `
  }
}
customElements.define('project-card', Card)
