import './popup.styles.scss'

function PopUp({closeHandeler,addPersonHandeler}) {
    return(    
    <div className='popup-container'>
        <div className='popup-content'>
            <button onClick={closeHandeler}> X </button>
            <div className='title'>
                <h1>Modal Title</h1>
            </div>
            <div className='body'>
                <p>Modal Body</p>
            </div>
            <div>
                <button onClick={addPersonHandeler}>Confirm</button>
            </div>
        </div>
  </div>)
}

export default PopUp