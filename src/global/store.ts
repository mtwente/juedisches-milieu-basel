import { Storage } from "@ionic/storage";
import { createStore } from "@stencil/store";
import { version } from '../buildinfo';
type PuzzlePieceState = 'locked' | 'unlocked' | 'done' | 'highlighted';
export interface AppState {
  t1: PuzzlePieceState
  t2: PuzzlePieceState
  t3: PuzzlePieceState
  t4: PuzzlePieceState
  t5: PuzzlePieceState
  t6: PuzzlePieceState
  t7: PuzzlePieceState
  t8: PuzzlePieceState
  t9: PuzzlePieceState
  t10: PuzzlePieceState
  t11: PuzzlePieceState
  t12: PuzzlePieceState


  playedIntro: boolean
  showBravo: boolean
  appVersion: string;
}
const { state, onChange, on, reset } = createStore<AppState>({
  t1: 'unlocked',
  t2: 'locked',
  t3: 'locked',
  t4: 'locked',
  t5: 'locked',
  t6: 'locked',
  t7: 'locked',
  t8: 'locked',
  t9: 'locked',
  t10: 'locked',
  t11: 'locked',
  t12: 'locked',

  playedIntro: false,
  showBravo: false,
  appVersion: version
});
function getRandomAndRemoveFromArray(array: string[]) {
  // Generate a random index within the range of the array length
  const randomIndex = Math.floor(Math.random() * array.length);

  // Remove the element at the random index from the array and store it
  const pickedElement = array.splice(randomIndex, 1)[0];

  // Return the picked element
  return pickedElement;
}
function pickMany(nr: number, array: string[]): string[] {
  let clone = [...array];
  // as long as 3 or more are locked
  if (clone.length > 2) {
    // exclude t12
    clone = clone.filter(k => k !== 't12')
  }
  const res: string[] = []
  for (let i = 0; i < nr; i++) {
    res.push(getRandomAndRemoveFromArray(clone))
  }
  return res;
}
const sleep = async (ms: number) => new Promise<void>((res) => {
  setTimeout(() => {
    res();
  }, ms)
})
async function startRoulette(nrUnlock: number) {
  // get unlocked
  const unlocked = Object.keys(state).filter(k => state[k] === 'unlocked')
  if (unlocked.length >= 3) return;
  await sleep(500)

  // get all locked
  const locked = Object.keys(state).filter(k => state[k] === 'locked')

  // pick the levels to unlock
  const picked = pickMany(nrUnlock, locked);

  // blink
  const promisedIntervals = locked.map(async (key) => {
    const wait = Math.random() * 500;
    await sleep(wait)
    const delay = 800;
    return setInterval(() => {
      if (state[key] === 'locked') {
        state[key] = 'highlighted'
      };
      setTimeout(() => {
        if (picked.includes(key)) {
          state[key] = 'unlocked';
        }
        else {
          state[key] = 'locked';
        }
      }, 200);
    }, delay);
  })
  const intervals = await Promise.all(promisedIntervals);

  // stop blinking
  setTimeout(() => {
    intervals.forEach(i => clearInterval(i));
  }, 2000);

}

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

    // if app versions are the same
    if (storedState?.appVersion === state?.appVersion) {

      // read the stored state into memory
      for (const key in storedState) {
        if (Object.prototype.hasOwnProperty.call(storedState, key)) {
          state[key] = storedState[key] === 'highlighted' ? 'locked' : storedState[key];
        }
      }
    } else {
      // override the storage with initial state
      toStorage()
    }
  } catch (error) {
    console.warn('Problem when trying to restore the state from storage')
  }

}


/**
 * returns false, if the URL contains ?shuffle=false, else true
 */
function getShuffle(): boolean {
  let shuffle = true
  try {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    shuffle = urlParams.get('shuffle') !== 'false';
  } catch (error) { }
  return shuffle;
}
setupStorage().then().catch().finally(() => {

  const shuffle = getShuffle();

  onChange('t1', (value) => {
    if (value === 'done') {

      if (shuffle) {
        const nrUnlock = 3;
        startRoulette(nrUnlock);

      }
      else {

        state.t2 = 'unlocked';
        state.t3 = 'unlocked';
        state.t4 = 'unlocked';
        state.t5 = 'unlocked';
        state.t6 = 'unlocked';
        state.t7 = 'unlocked';
        state.t8 = 'unlocked';
        state.t9 = 'unlocked';
        state.t10 = 'unlocked';
        state.t11 = 'unlocked';
        state.t12 = 'unlocked';
      }

    }
  });

  if (shuffle) {
    for (let i = 2; i <= 12; i++) {
      onChange('t' + i as keyof AppState, value => {
        if (value === 'done') {
          const nrUnlock = 1;
          startRoulette(nrUnlock);
        }
      });
    }
  }
  on('set', async (key) => {
    if (key.startsWith('t')) {
      const parts = [state.t1, state.t2, state.t3, state.t4, state.t5, state.t6, state.t7, state.t8, state.t9, state.t10, state.t11, state.t12];
      const done = parts.filter(t => t === 'done');
      if (parts.length === done.length) {
        await sleep(1000);
        state.showBravo = true
      } else if (state.showBravo === true) {
        state.showBravo = false
      }
    }
  })
});

export { onChange, reset, state };
