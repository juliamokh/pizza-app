import Component from '../../blackbox';

import './ordercard.css';
import pizza from './pizza.png';

class OrderCard extends Component {
  constructor(props) {
    super(props);
    this.host.classList.add('order-card');
  }

  render() {
    const { index } = this.props;

    return `
      <img src="${pizza}" alt="pizza">
      <div class="details">
        <time class="order-time" datetime="2017-02-01T00:00:00">00:00:00</time>
        <span class="order-number">#${index}</span>
        <span class="order-eta">ETA: <time datetime="01:00">1 min</time></span>
        <span class="order-price">$4.00</span>
      </div>
    `
  }
};

export default OrderCard;
