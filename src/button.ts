import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';

const componentSelector = 'pie-button';

export type PieButtonType = LitElement & {
    size: string;
};

export class PieButton extends LitElement implements PieButtonType {
    @property()
    public size: string = 'medium';

    render = () => html`
        <button size=${this.size}>
            <slot></slot>
        </button>`;
}

customElements.define(componentSelector, PieButton);

declare global {
    interface HTMLElementTagNameMap {
        [componentSelector]: PieButton;
    }
}
