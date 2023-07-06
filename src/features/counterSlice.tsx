import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
  }

  const initialState: CounterState = {
    value: 0,
  };

// creatSlice actionCreater, dithpach, reducerを一度に作ることができる関数（用意されている）
export const counterSlice = createSlice({
    name: "counter",    // sliceの名前
    initialState,
    reducers:{          // 状態を更新するための関数みたいなもの actionCreaterはreducerを作成すると同じ名称で自動的に裏で作成される
        increment: (state) => {     // カウントアップ stateはその時々の状態
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    }
})

export const { increment, decrement } = counterSlice.actions; //actionCreaterはコンポーネントに受け渡さないといけないのでexport
export default counterSlice.reducer; // redusersではなくreducersを渡す