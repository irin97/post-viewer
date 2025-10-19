import type { ReactElement, ReactNode } from "react"

type ItemListProps<T> = {
    items: T[];
    renderItem: (item: T) => ReactNode;
    itemClassName?: string;
    listClassName?: string;
}

export function ItemList<T extends { id: number }>({ items, renderItem, itemClassName, listClassName }: ItemListProps<T>): ReactElement {

    const itemList = items.map((item) => (
        <li className={itemClassName} key={item.id}>{renderItem(item)}</li>
    ))

    return <ul className={listClassName}>{itemList}</ul>
} 