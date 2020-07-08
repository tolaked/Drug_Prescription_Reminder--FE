import * as types from "../actionTypes/prescriptions";

const initialState = {
  requesting: false,
  prescription: {},
  prescriptions: [],
  addPrescriptionSuccess:null,
  addPrescriptionError: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_SINGLE_PRESCRIPTION_REQUEST:
      return {
        ...state,
        prescription: action.payload,
        requesting: false,
        prescriptions: state.prescriptions, 
        addPrescriptionSuccess:false,
        addPrescriptionError: false,
      };

    case types.GET_PRESCRIPTIONS_REQUEST:
      return {
        ...state,
        requesting: action.payload,
        prescriptions: [],
        prescription: {},
        addPrescriptionSuccess:false,
        addPrescriptionError: false,
      };
    case types.GET_PRESCRIPTIONS_SUCCESS:
      return {
        ...state,
        requesting: false,
        prescriptions: action.payload,
        prescription: {},
        addPrescriptionSuccess:false,
        // addPrescriptionError: false,
      };
    case types.GET_PRESCRIPTIONS_ERROR:
      return {
        ...state,
        requesting: false,
        prescriptions: [],
        prescription: {},
        addPrescriptionSuccess:false,
        addPrescriptionError: false,
      };
    case types.DELETE_PRESCRIPTION_SUCCESS:
      return {
        ...state,
        addPrescriptionSuccess:false,
        addPrescriptionError:false,
        requesting: false,
        prescriptions: state.prescriptions.filter(
          (pres) => pres._id !== action.payload._id
        ),
      };
    case types.ADD_PRESCRIPTION_SUCCESS:
      return {
        ...state,
        requesting: false,
        addPrescriptionSuccess:true,
        prescriptions: [...state.prescriptions, action.payload],
      };
      case types.ADD_PRESCRIPTION_ERROR:
      return {
        ...state,
        requesting: false,
        addPrescriptionSuccess:false,
        addPrescriptionError:action.payload
      };
    default:
      return state;
  }
}

