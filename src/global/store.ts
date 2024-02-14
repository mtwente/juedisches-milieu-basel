import { Storage } from "@ionic/storage";
import { createStore } from "@stencil/store";
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


  playedIntro: false
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
  const clone = [...array];
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
      },  200);
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
  // on('set', toStorage)
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

setupStorage().then().catch().finally(() => {
  onChange('t1', (value) => {
    if (value === 'done') {
      const nrUnlock = 3;
      startRoulette(nrUnlock);
    }
  });

  for (let i = 2; i <= 12; i++) {
    onChange('t' + i as keyof AppState, value => {
      if (value === 'done') {
        const nrUnlock = 1;
        startRoulette(nrUnlock);
      }
    });
  }
});

export { onChange, reset, state };

