// export default prefix => {
//   const initialState = {
//     data: null,
//     fetching: false,
//     error: null
//   }
//
//   return (state = initialState, action) => {
//     switch (action.type) {
//       case `${prefix}/FETCH__BEGIN`:
//         return {
//           ...state,
//           fetching: true
//         }
//       case `${prefix}/FETCH__SUCCESS`:
//         return {
//           ...state,
//           fetching: false,
//           data: action.data,
//           error: null
//         }
//       case `${prefix}/FETCH__FAIL`:
//         return {
//           ...state,
//           fetching: false,
//           error: action.error
//         }
//       default:
//         return state
//     }
//   }
// }