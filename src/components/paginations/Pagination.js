import React, {useMemo} from 'react';

function Pagination({current, count, setCurrent, range = 4}){
    const items = useMemo(() => Array(count || 1).fill('').map((_, key)=> key+1), [count]);
    const isMany = useMemo(() => range * 2 + 1 < count, [range, count]);
    const minRange = () => {
        const min = current - range;
        return 1 < min ? min - 1 : 0 
    };
    const maxRange = () => {
        const max = current + range;
        return max < count ? max : count
    };
    const showItems = isMany
        ? items.slice(minRange(), maxRange())
        : items;
    const next = () => {
        if(current < count){
            setCurrent(++current);
        }
    };
    const previous = () => {
        if(1 < current){
            setCurrent(--current);
        }
    };
    return (
        <div className="pagination">
            <div onClick={previous}>{'<'}</div>
            { isMany && 1 < current - range ? <div onClick={() => setCurrent(1)}>1</div> : '' }
            { isMany && 1 < current - range - 1 ? ' ... ':''}
            { showItems.map(item => 
                <div
                    key={item}
                    className={current === item?'active':''}
                    onClick={() => setCurrent(item)}
                >{item}</div>)
            }
            { isMany && current + range + 1 < count ? ' ... ':''}
            { isMany && current + range < count ? <div onClick={() => setCurrent(count)}>{count}</div> : '' }
            <div onClick={next}>{'>'}</div>
        </div>
    );
}

export default Pagination;