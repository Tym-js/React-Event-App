import { MODAL_OPEN, MODAL_CLOSE } from "./modalConstants.jsx"

const initialState = null

export default (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        modalType: action.payload.modalType,
        modalProps: action.payload.modalProps
      }
    case MODAL_CLOSE:
      return {
        state: null
      }
    default:
      return state
  }
}
