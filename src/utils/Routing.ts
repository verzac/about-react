import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function goTo(route: string): void {
  console.log(`Redirecting to ${route}...`);
  history.push(route);
}

export default { goTo, history };