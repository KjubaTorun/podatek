import React from "react";

function inputForm({handleInputChange}){
    return(
        <form>
            <label>
                Kwota brutto:
                <input type='number' name='brutto' onChange={handleInputChange}/>

            </label>
            <label>
                Procent podatku:
                <select name ='podatek' onChange={handleInputChange}>
                    <option value="18">18%</option>
                    <option value="19">19%</option>
                    <option value="20">20%</option>
                </select>
            </label>
        </form>
    )
}
export default inputForm;