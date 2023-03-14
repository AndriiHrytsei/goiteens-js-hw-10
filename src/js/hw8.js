//! ========================================================================================================
//! ========================================================================================================
//! ================================================== 1 ===================================================
//! ========================================================================================================
//! ========================================================================================================



export const spanValue = document.querySelector("#value")
export const increaseBtn = document.querySelector("button[data-action='increment']")
export const decreaseBtn = document.querySelector("button[data-action='decrement']")
export let counterValue = 0

export const increaseOnClick = () => {
    counterValue += 1
    spanValue.textContent = counterValue
}
export const decreaseOnClick = () => {
    counterValue -= 1
    spanValue.textContent = counterValue
}


//! ========================================================================================================
//! ========================================================================================================
//! ================================================== 2 ===================================================
//! ========================================================================================================
//! ========================================================================================================

export const nameInput = document.querySelector("#name-input")
export const nameOutput = document.querySelector("#name-output")
export const writeNameOnInput = (e) => {
    nameOutput.textContent = e.currentTarget.value.trim()
    if (e.currentTarget.value.trim() === ""){
        nameOutput.textContent = "Anonymous"
    }
}


