import Component from './Component';

(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('main');
    let count = 0
    const MainComponent = new Component({
      tagName: 'div',
      innerHTML: '',
      parent: root,
      classList: ['main'],
      props: { count }
    });

    MainComponent.init();

    const CounterComponent = new Component({
      tagName: 'div',
      innerHTML: 'click time: 0',
      parent: MainComponent.mount,
      classList: ['counter']
    });

    const ButtonComponent = new Component({
      tagName: 'button',
      innerHTML: 'click me!',
      parent: MainComponent.mount,
      classList: ['button']
    });

    CounterComponent.init()
    CounterComponent.listening(count)
    ButtonComponent.init()
    ButtonComponent.setClick(() => {
      CounterComponent.setBody(`click time: ${++count}`)
    })
  })
})()