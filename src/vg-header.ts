import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { litTheme } from './lit-theme'

@customElement('vg-header')
export class VgHeader extends LitElement {
  static styles = css`
    :host {
      --container-border-color: var(--vg-header-container-border-color, ${litTheme.colors.primary});
    }

    :host {
      border: solid 2px var(--container-border-color);
      border-radius: 8px;
      font-family: sans-serif;
      gap: ${litTheme.space._2};
      display: flex;
      align-items: center;
      padding: ${litTheme.space._2};
    }

    h1 {
      font-size: ${litTheme.fontSizes._3};
      margin: 0;
    }
  `

  @property() name = 'World'

  render() {
    return html`
      <slot></slot>
      <h1>Hello, ${this.name}!</h1>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vg-header': VgHeader
  }
}
