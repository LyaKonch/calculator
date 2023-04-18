import { useReducer } from 'react';
import { create, all } from 'mathjs'
import { initialState,reducerHandler } from './assets/calcReducer/Reducer';

const config = {};
const math = create(all, config);

export function App() {

   const [state,dispatch]=useReducer(reducerHandler,initialState);

   return (
      <div className='wrapper'>
             <div className='calculator'>
                <div id="display" >
                   <p className='display-exp'>{state.displayExpAbove}</p>
                   <p className='display-change'>{state.resultExpBeneath}</p>
                </div>
                <div className='user-area'>

                   <button id="clear" onClick={() => {
                     dispatch({type:'CLEAR'})
                   }} >AC</button>
                  <button id="clear" onClick={() => {
                     dispatch({type:'REMOVE_LAST',payload:Math.sqrt(state.resultExpBeneath)%1 != 0 ? Math.sqrt(state.resultExpBeneath).toFixed(2) :Math.sqrt(state.resultExpBeneath)})
                   }} >{`<—`}</button>


                  <button onClick={() => {
                     dispatch({type:'POWER',payload:Math.pow(state.resultExpBeneath,2)%1 != 0 ? Math.pow(state.resultExpBeneath,2).toFixed(2) :Math.pow(state.resultExpBeneath,2)})
                   }} >x<sup>2</sup></button>
                   <button onClick={() => {
                     dispatch({type:'SQRT',payload:Math.sqrt(state.resultExpBeneath)%1 != 0 ? Math.sqrt(state.resultExpBeneath).toFixed(2) :Math.sqrt(state.resultExpBeneath)})
                   }} ><sup>2</sup>√x</button>



                   <button onClick={() => {
                     dispatch({type:'DIVIDE',payload:'/'})
                   }} >/</button>
                   <button onClick={() => {
                     dispatch({type:'MULTIPLE',payload:'*'})
                   }} >x</button>
                   <button onClick={() => {
                      dispatch({type:'7',payload:'7'})
                   }} >7</button>
                   <button onClick={() => {
                      dispatch({type:'8',payload:'8'})
                   }} >8</button>
                   <button onClick={() => {
                    dispatch({type:'9',payload:'9'})
                   }} >9</button>
                   <button onClick={() => {
                      dispatch({type:'SUBTRACT',payload:'-'})
                   }} >-</button>


                   <button onClick={() => {
                      dispatch({type:'4',payload:'4'})
                   }} >4</button>
                   <button onClick={() => {
                        dispatch({type:'5',payload:'5'})
                   }} >5</button>
                   <button onClick={() => {
                     dispatch({type:'6',payload:'6'})
                   }} >6</button>
                   <button onClick={() => {
                     dispatch({type:'ADD',payload:'+'})
                   }} >+</button>


                   <button onClick={() => {
                      dispatch({type:'1',payload:'1'})
                   }} >1</button>
                   <button onClick={() => {
                     dispatch({type:'2',payload:'2'})
                   }} >2</button>
                   <button onClick={() => {
                     dispatch({type:'3',payload:'3'})
                   }} >3</button>
                   <button id="equal" onClick={() => {
                     dispatch({type:'EQUAL',payload:math.evaluate(state.displayExpAbove)%1 !=0 ?  math.evaluate(state.displayExpAbove).toFixed(3) : math.evaluate(state.displayExpAbove)})
                   }} >=</button>

                   <button id="zero" onClick={() => {
                      dispatch({type:'0',payload:'0'})
                   }} >0</button>
                   <button onClick={() => { dispatch({type:'.',payload:'.'})}} >.</button>

                </div>
             </div>
             <p className='anotation'>Coded by LeJuilenne</p>
          </div>
   );
}

export default App;