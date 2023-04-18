export const initialState={
   displayExpAbove:'',
   resultExpBeneath:'0'
}
export const reducerHandler=(state,action) =>{
   switch(action.type){
      case 'CLEAR':
         return{
            displayExpAbove:'',
            resultExpBeneath:'0'
         }
      case 'REMOVE_LAST':
          return{
            displayExpAbove:state.displayExpAbove.slice(0, state.displayExpAbove.length-1),
            resultExpBeneath:state.resultExpBeneath.slice(0, state.resultExpBeneath.length-1)
      }
      case 'SQRT':
      case 'POWER':
         return{
            displayExpAbove:action.payload.toString(),
            resultExpBeneath:action.payload.toString()
      }
      case 'DIVIDE':
      case 'MULTIPLE':
      case 'ADD':
      case 'SUBTRACT':
         return state.displayExpAbove.includes('=') ? {
            displayExpAbove:state.resultExpBeneath + action.payload,
            resultExpBeneath:action.payload
         }: state.resultExpBeneath==='0' ? {
            ...state
         }: /[+-/*]/.test(state.displayExpAbove.slice(-1)) ?{
            displayExpAbove:state.displayExpAbove.slice(0,state.displayExpAbove.length-1) + action.payload,
            resultExpBeneath:action.payload
         }:{
            displayExpAbove:state.displayExpAbove + action.payload,
            resultExpBeneath:action.payload
         };
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
         return state.displayExpAbove.includes('=') ? {
            displayExpAbove:action.payload,
            resultExpBeneath:action.payload
         }: state.resultExpBeneath==='0' ? {
            displayExpAbove:action.payload,
            resultExpBeneath:action.payload
         }:{
            displayExpAbove:state.displayExpAbove + action.payload,
            resultExpBeneath:(state.resultExpBeneath=='+'| state.resultExpBeneath=='-' | state.resultExpBeneath=='*' | state.resultExpBeneath=='/') ? action.payload : state.resultExpBeneath+action.payload
         };
      case '.':
         return state.displayExpAbove.includes('=') ? {
            displayExpAbove:'',
            resultExpBeneath:'0'
         }: {
            displayExpAbove:state.displayExpAbove + action.payload,
            resultExpBeneath:state.resultExpBeneath+action.payload
         };
      case 'EQUAL':
         return {
            displayExpAbove:state.displayExpAbove +'='+ action.payload,
            resultExpBeneath:action.payload
         }
      default:
            return state
   }
}