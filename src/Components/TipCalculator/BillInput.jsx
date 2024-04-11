import React from "react"
import './TipCalculator.css'

export const BillInput = ({ setBill, bill }) => {
    return (
        <>
            <h1>Bill</h1>
            <label htmlFor="input-bill">
                <input 
                    className="input-bill"
                    id="input-bill" 
                    type="number"
                    value={bill}
                    placeholder="0"
                    onChange={(e) => setBill(e.target.value)}
                />
            </label>
        </>
    )
}