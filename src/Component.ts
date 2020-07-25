interface HTMLElementSprut extends HTMLElement {
  handleClick: (e: any) => any;
}

class Component {
  private component: HTMLElementSprut;
  private readonly tagName: string;
  private readonly innerHTML: string;
  private parent: HTMLElementSprut;
  private classList: Array<string>;
  constructor(props: any) {
    this.tagName = props.tagName;
    this.innerHTML = props.innerHTML;
    this.parent = props.parent;
    this.classList = props.classList;
  }

  init() {
    // @ts-ignore
    this.component = document.createElement(this.tagName);
    this.component.innerHTML = this.innerHTML
    this.classList.map((className: string) => {
      this.component.classList.add(className);
    })
    this.parent.append(this.component);
  }

  get mount() {
    return this.component;
  }

  setClick(callback: (e: any) => any) {
    this.component.handleClick = () => {
      this.component.addEventListener('click', callback)
    };
    this.component.handleClick(callback);
  }

  listening(broadcast: number) {
  }

  setBody(body: string) {
    this.component.innerHTML = body;
  }
}

export default Component;