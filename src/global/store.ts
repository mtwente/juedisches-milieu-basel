import { createStore } from "@stencil/store";
import { Storage } from "@ionic/storage";
export interface AppState {
  t1: boolean
  t2: boolean
  t3: boolean
  t4: boolean
  t5: boolean
  t6: boolean
  t7: boolean
  t8: boolean
  t9: boolean
  t10: boolean
  t11: boolean
  t12: boolean

  t2to12locked: boolean

  playedIntro: boolean

}
const { state, onChange, on, reset } = createStore<AppState>({
  t1: false,
  t2: false,
  t3: false,
  t4: false,
  t5: false,
  t6: false,
  t7: false,
  t8: false,
  t9: false,
  t10: false,
  t11: false,
  t12: false,

  t2to12locked: true,

  playedIntro: false
});

onChange('t1', value => {
  setTimeout(() => {
    state.t2to12locked = !value;
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
