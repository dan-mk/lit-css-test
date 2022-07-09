import { html, css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { litTheme } from './lit-theme'

@customElement('vg-emoji')
export class VgEmoji extends LitElement {
    static styles = css`
        :host {
            border: solid 2px orange;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: ${litTheme.fontSizes._2};
            background: yellow;
            border-radius: 9999px;
            width: 2rem;
            height: 2rem;
        }

        slot {
            display: flex;
            transform: rotate(90deg);
        }
    `

    render() {

        return html`
            <slot></slot>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'vg-emoji': VgEmoji
    }
}