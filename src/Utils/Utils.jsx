import React from 'react'
export const distinct = (array) => {
    return [...new Set(array.reduce((prev, cur) => prev.concat(cur), []))];
}

export const LineBreak = () => <div style={{width:'100%'}}/>