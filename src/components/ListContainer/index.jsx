import React, { useRef, useState } from 'react'
import { Icon } from '@iconify/react'
import ListItem from '../ListItem'

const ListContainer = ({
    list,
    setList
}) => {
    const [enableAdd, setEnableAdd] = useState(false)
    const [newItem, setNewItem] = useState('')
    const [dragging, setDragging] = useState(false)

    const draggingItem = useRef()
    const dragOverItem = useRef()

    const dragStart = (e, index) => {
        draggingItem.current = index
        setDragging(true)
        console.log(e.target.innerHTML);
    }
    const dragEnter = (e, index) => {
        dragOverItem.current = index
        console.log(e.target.innerHTML);
        const listCopy = [...list]
        const draggingItemContent = listCopy[draggingItem.current]
        listCopy.splice(draggingItem.current, 1)
        listCopy.splice(dragOverItem.current, 0, draggingItemContent)
        draggingItem.current = dragOverItem.current
        setList(listCopy)
    }
    const dragEnd = () => {
        draggingItem.current = null
        dragOverItem.current = null
        setDragging(false)
    }

    const handleAdd = () => {
        if (newItem === '') return alert('Please enter a valid outline')
        setList((prev) => [...prev, newItem])
        setNewItem('')
        setEnableAdd(!enableAdd)
    }
    return (
        <div className='border shadow-md p-4 rounded-md min-w-[300px] w-fit flex flex-col gap-4'>
            {/* header */}
            <div className='flex justify-between w-full'>
                <span className='font-medium'>
                    Edit outlines
                </span>
                <span>
                    <Icon icon="mdi:close" className='text-red-500' />
                </span>
            </div>
            {/* items */}
            <div className='text-xs text-neutral-500'>
                Outlines
            </div>
            <div className='flex flex-col gap-1 transition-all'>
                {list.map((item, index) => (
                    <ListItem
                        key={index}
                        item={item}
                        onDragStart={(e) => dragStart(e, index)}
                        onDragEnter={(e) => dragEnter(e, index)}
                        onDragEnd={dragEnd}
                        dragging={dragging}
                    />
                ))}
            </div>
            {/* add outline */}
            <div className='flex flex-col gap-3'>
                {
                    enableAdd && (
                        <div>
                            <input
                                type="text"
                                className='w-full border rounded py-1 px-2'
                                placeholder='Enter new outline'
                                value={newItem}
                                onChange={(e) => setNewItem(e.target.value)}
                            />
                        </div>
                    )
                }
                <div className='flex gap-2'>
                    {
                        enableAdd && (
                            <button className='border border-red-500 w-full flex gap-2 items-center text-sm text-red-500 p-2 rounded font-medium'
                                onClick={() => setEnableAdd(!enableAdd)}
                            >


                                <Icon icon={'mdi:close'} className='text-base' />
                                <span>
                                    Cancel
                                </span>
                            </button>
                        )
                    }
                    {
                        !enableAdd && (
                            <button className='border border-purple-500 w-full flex gap-2 items-center text-sm text-purple-500 p-2 rounded font-medium'
                                onClick={() => setEnableAdd(!enableAdd)}
                            >
                                <Icon icon={'mdi:plus'} className='text-base' />
                                <span>
                                    Add Outline
                                </span>
                            </button>
                        )
                    }
                    {
                        enableAdd && (
                            <button className='border border-purple-500 w-full flex gap-2 items-center text-sm text-purple-500 p-2 rounded font-medium'
                                onClick={handleAdd}
                            >
                                <Icon icon={'mdi:upload'} className='text-base' />
                                <span>
                                    Add to List
                                </span>
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ListContainer