interface HTMLElementSprut extends HTMLElement {
  handleClick: (e: any) => any;
}

class Component {
  private static tagName: string;
  private static innerHTML: string;
  private static root: HTMLElement; //сделать через interface
  private static classList: Array<string>;
  private component: HTMLElement;
  constructor(props: any) {
    //@ts-ignore
    this.tagName = props.tagName;
    //@ts-ignore

    this.innerHTML = props.innerHTML;
    //@ts-ignore

    this.parent = props.parent;
    //@ts-ignore

    this.classList = props.classList;
  }

  init() {
    //@ts-ignore
    this.component = document.createElement(this.tagName);
    //@ts-ignore

    this.component.innerHTML = this.innerHTML
    //@ts-ignore

    this.classList.map((className: string) => {
      //@ts-ignore

      this.component.classList.add(className);
    })
    //@ts-ignore
    this.parent.append(this.component);
  }

  get mount() {
    //@ts-ignore
    return this.component;
  }

  setClick(callback: (e: any) => any) {
    //@ts-ignore
    this.component.handleClick = () => {
      this.component.addEventListener('click', callback)
    };
    //@ts-ignore
    this.component.handleClick(callback);
  }

  listening(broadcast: number) {
  }

  setBody(body: string) {
    this.component.innerHTML = body;
  }
}

export default Component;