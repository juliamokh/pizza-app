import Component from '../blackbox';
import Order from './Order';

import iconAdd from '../img/iconAdd.svg';

class Queue extends Component {
  constructor() {
    super();

    this.host = document.createElement('main');
    this.host.classList.add('page-main');

    this.queue = document.createElement('section');
    this.queue.classList.add('queue');
  }

  getQueue() {
    const list = [];
    for (let i = 0; i < 9; i++) {
      const order = new Order();
      list.push(order.update({ index: i + 1 }));
    }
    return this.insertChildren(list, this.queue);
  }

  render() {
    return [`
      <button class="btn btn-add" type="button">
        <img src="${iconAdd}" alt="" width="40px">
        Add new pizza
      </button>
    `,
    this.getQueue()]
  }
};

export default Queue;
