import { greetUser } from '$utils/greet';
// src/index.ts
import './index.css';
window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'John Doe';
  greetUser(name);
});
