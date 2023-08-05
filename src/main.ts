import './style.css'

import { setupCounter } from './counter.ts'
import './topics/01-basic-types.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  texto de prueba
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
