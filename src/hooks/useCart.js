import { useLocalStorage } from './useLocalStorage';

export function useCart(initialState){
    const [storedCart, setStoredCart] = useLocalStorage('cart', initialState);

    const setCart = (value) => {
        setStoredCart(value);
    }

    return [storedCart, setCart];
}