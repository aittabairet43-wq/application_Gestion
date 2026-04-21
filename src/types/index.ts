export interface User {
    id: number;
    username: string;
    role: 'admin' | 'staff';
}

export interface Product {
    id: number;
    name: string;
    barcode: string;
    price: number;
    quantity: number;
    unit: string;
}

export interface Sale {
    id: number;
    total: number;
    payment_method: string;
    created_at: string;
}

export interface CartItem extends Product {
    cartQty: number;
}