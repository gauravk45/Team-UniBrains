import { ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_CART } from "./cartTypes";
import { toast } from "react-toastify";

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      let updatedItems;

      if (existingProduct) {
        updatedItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        toast.success(`Added ${existingProduct.name} to the cart`);
      } else {
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
        toast.success(`Added ${action.payload.name} to the cart`);
      }

      return { ...state, items: updatedItems };
    }

    case REMOVE_PRODUCT: {
      const updatedItems = state.items
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

      const removedProduct = state.items.find(
        (item) => item.id === action.payload
      );
      if (removedProduct) {
        toast.error(`Removed 1 ${removedProduct.name} from the cart`);
      }

      return { ...state, items: updatedItems };
    }

    case CLEAR_CART:
      toast.success("Cart cleared");
      return { ...state, items: [] };

    default:
      return state;
  }
};

export default cartReducer;
