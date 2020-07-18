interface HTMLButtonElementSprut extends HTMLButtonElement {
  handleClick: (e: any) => any;
}
(() => {
  document.addEventListener('DOMContentLoaded', () => {
    let count = 0
    function handleClick(callback: (e: HTMLBaseElement) => any) {
      return this.addEventListener('click', callback)
    }
    
    class Counter {
      private static counter: HTMLDivElement;
      private static props: {};
      static init() {
        const main = document.getElementById('main');
        this.counter = document.createElement('div');
        this.counter.innerHTML = 'Count of click: '
        main.append(this.counter);
      }

      static listening() {
        const button = document.getElementsByClassName('button');
        let i = 0
        const body = this.counter.innerHTML
        button[0].addEventListener('click', () => {
          this.counter.innerHTML = `${body} ${count}`
          console.log(count)
        })
      }
    }

    class Button {
      private static button: HTMLButtonElementSprut;
      static init() {
        const main = document.getElementById('main');
        this.button = document.createElement('button');
        this.button.classList.add('button');
        main.append(this.button);
      }
      static setBody() {
        this.button.innerHTML = 'click me!'
      }
      static setClick() {
        this.button.handleClick = handleClick;
        this.button.handleClick((e: any) => console.log(++count));
      }
    }

    Button.init();
    Button.setBody();
    Button.setClick();
    Counter.init();
    Counter.listening();
  })
})()