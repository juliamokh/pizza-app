import Component from '../../blackbox';
import MiniOrder from '../miniorder';

import './queue.css';

import iconAdd from './iconAdd.svg';

class Queue extends Component {
  constructor() {
    super();

    this.host.classList.add('queue-container');

    this.queue = document.createElement('section');
    this.queue.classList.add('queue');
  }

  getQueue() {
    const list = [];
    for (let i = 0; i < 8; i++) {
      const order = new MiniOrder();
      list.push(order.update({ index: i + 1 }));
    }
    return this.insertChildren(list, this.queue);
  }

  render() {
    return [`
      <a href="#" class="btn btn-add">
        <img src="${iconAdd}" alt="">
        Add new pizza
      </a>
    `,
    this.getQueue()]
  }
};

export default Queue;
