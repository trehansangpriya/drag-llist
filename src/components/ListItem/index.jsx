import { Icon } from '@iconify/react'
import React from 'react'

const ListItem = ({
    item,
    onDragStart,
    onDragEnter,
    onDragEnd,
    dragging
}) => {
    return (
        <div
            className={[
                'p-2 bg-neutral-200 rounded text-sm flex justify-between items-center cursor-move transition-all',
                dragging && 'opacity-50'
            ].join(' ')}
            draggable={true}
            onDragStart={onDragStart}
            onDragEnter={onDragEnter}
            onDragOver={(e) => e.preventDefault()}
            onDragEnd={onDragEnd}
        >
            <span>
                {item}
            </span>
            <span>
                <Icon icon="mdi:drag" className='text-xl' />
            </span>
        </div>
    )
}

export default ListItem