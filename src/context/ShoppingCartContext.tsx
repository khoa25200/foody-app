import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { ICart } from 'types/cart.type';
import { createContext, ReactNode, useContext, useState } from 'react';
import { useLocaleStorage } from 'hook/useLocalStorage';
import Modal from 'Modal';



// const initialCart: ICart = {
//   id: null,
//   quantity: 0,
// }
type ShoppingCartProviderProps = {
    children: ReactNode
}
type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    addCartQuantity: (id: number, value: number) => void
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: ICart[]
}
const ShoppingCartContext = createContext({} as ShoppingCartContext)
export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}


export default function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useLocaleStorage<ICart[]>(
        'shopping-cart',
        []
    )



    const cartQuantity = cartItems.reduce(
        (quantity, item) => item?.quantity + quantity,
        0
    )
    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    // Get the item by the id in the cart.
    function getItemQuantity(id: number) {
        return cartItems.find((item) => item?.id === id)?.quantity || 0
    }
    // Increase the item by the id in the cart.
    function addCartQuantity(id: number, increaseValue: number) {
        setCartItems((currItems) => {
            if (currItems.find((item) => item?.id === id) == null) {
                return [...currItems, { id, quantity: increaseValue }]
            } else {
                return currItems.map((item) => {
                    if (item?.id === id) {
                        return { ...item, quantity: item?.quantity + increaseValue }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    function increaseCartQuantity(id: number) {
        setCartItems((currItems) => {
            if (currItems.find((item) => item?.id === id) == null) {
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map((item) => {
                    if (item?.id === id) {
                        return { ...item, quantity: item?.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    // decrease the item by the id in the cart.
    function decreaseCartQuantity(id: number) {
        setCartItems((currItems) => {
            if (currItems.find((item) => item?.id === id)?.quantity === 1) {
                return currItems.filter((item) => item?.id !== id)
            } else {
                return currItems.map((item) => {
                    if (item?.id === id) {
                        return { ...item, quantity: item?.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    // remove the item by the id in the cart.
    function removeFromCart(id: number) {
        setCartItems((currItems) => {
            return currItems.filter((item) => item?.id !== id)
        })
    }

    // const dispatch = useDispatch()
    return (
        <ShoppingCartContext.Provider
            value={{
                getItemQuantity,
                addCartQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                openCart,
                closeCart,
                cartItems,
                cartQuantity,
            }}
        >
            {children}
            <Modal isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}

