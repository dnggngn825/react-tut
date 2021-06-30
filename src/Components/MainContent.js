import React from 'react'

function MainContent() {
    return (
        <div>
            <div>
                <input type="checkbox" id="option1" name="option1" value="option1"></input>
                <label for="option1"> I have a bike</label>
            </div>
            <div>
                <input type="checkbox" id="option2" name="option2" value="option2"></input>
                <label for="option2"> I have a car</label>
            </div>
            <div>
                <input type="checkbox" id="option3" name="option3" value="option3"></input>
                <label for="option3"> I have a boat</label>
            </div>
        </div>
    )
}




export default MainContent