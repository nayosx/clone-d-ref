export interface Card<T> {
    id: number | string;
    name: string;
    img: string;
    description?: string;
    isSelected?: boolean;
    data: T;
}