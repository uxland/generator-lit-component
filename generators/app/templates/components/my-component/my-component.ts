import { html, LitElement, property, customElement, query, css, unsafeCSS} from 'lit-element';
import {locale} from "@uxland/uxl-prism";
import {template} from './template';

//@ts-ignore
import styles from './styles.scss';

@customElement('<%= moduleId %>')
export class <%= camelCase %> extends (locale(LitElement)) {


  render() {
    return html`${template(this)}`;
  }

  static get styles() {
    return css`${unsafeCSS(styles)}`;
  }
}
