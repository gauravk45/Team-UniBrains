import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "./productType";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;

// [
//   {
//     id: 1,
//     name: "Apple",
//     price: 10,
//     image: "https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg",
//   },
//   {
//     id: 2,
//     name: "Mango",
//     price: 8,
//     image: "https://www.svz.com/wp-content/uploads/2018/05/Mango.jpg",
//   },
//   {
//     id: 3,
//     name: "BlackBerry",
//     price: 15,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzliL4QADCfECQL6_49Mi0RP0-r8rKnstyHw&s",
//   },
//   {
//     id: 4,
//     name: "Watermelon",
//     price: 100,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOsnnlpcoWTydyvlI3Sih6ulZCXs6u610hOw&s",
//   },
//   {
//     id: 5,
//     name: "Kiwi",
//     price: 10,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQjAfVMSv0rvTIJl97anIxiSC29qJZKjXSg&s",
//   },
//   {
//     id: 6,
//     name: "Pineapple",
//     price: 30,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx8wdhGoauoe4pj0DW-6X3tmkzYn7Jaylszg&s",
//   },
//   {
//     id: 7,
//     name: "Cherry",
//     price: 5,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVr2Ij-5DTrJhyE6GCj7wrTsRhUEbPx8MLmA&s",
//   },
//   {
//     id: 8,
//     name: "Grapes",
//     price: 10,
//     image:
//       "https://media.istockphoto.com/id/489520104/photo/green-grape-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=9kg_3pMeBKYnHHjx2JECF61QwzxTikLaQ2w-6A5tOO0=",
//   },
// ],
