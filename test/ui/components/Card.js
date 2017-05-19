import BaseComponent from './BaseComponent';

class Card extends BaseComponent {
  // Properties
  getCardTitle(cardSelector) {
    return getText(cardSelector);
  }

  isCardExpanded(cardSelector) {
    return getAttribute(cardSelector, 'class').includes('gw-card--expanded');
  }

  // Actions
  toggleCardHeader(cardSelector) {
    click(cardSelector);
    return this;
  }
}

module.exports = new Card();
