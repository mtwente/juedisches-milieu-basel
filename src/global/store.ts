import { createStore } from "@stencil/store";
import { Storage } from "@ionic/storage";
export interface AppState {
  q1: boolean
  q2: boolean
  q3: boolean
  q4: boolean
  q5: boolean
  q6: boolean
  q7: boolean

  q2to7locked: boolean

  playedIntro: boolean

}
const { state, onChange, on, reset } = createStore<AppState>({
  q1: false,
  q2: false,
  q3: false,
  q4: false,
  q5: false,
  q6: false,
  q7: false,

  q2to7locked: true,

  playedIntro: false
});

onChange('q1', value => {
  setTimeout(() => {
    state.q2to7locked = !value;
  }, 2000)
});

async function setupStorage() {

  const store = new Storage();
  await store.create();

  // save state to local storage on each change
  const toStorage = () => store.set('app-state', JSON.stringify(state))
  on('set', toStorage)
  on('reset', toStorage)

  // get state from local storage on init
  try {
    const storedStateJSON = await store.get('app-state')
    const storedState: AppState = JSON.parse(storedStateJSON);
    for (const key in storedState) {
      if (Object.prototype.hasOwnProperty.call(storedState, key)) {
        state[key] = storedState[key];
      }
    }
  } catch (error) {
    console.warn('Problem when trying to restore the state from storage')
  }

}

setupStorage().then().catch();

export { state, reset, onChange };
