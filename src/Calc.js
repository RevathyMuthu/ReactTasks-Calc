import React, { useState } from 'react';
import './Calc.css';

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                const result = evalExpression(displayValue);
                setDisplayValue(result.toString());
            } catch (error) {
                setDisplayValue('Error');
            }
        } else if (value === 'C') {
            setDisplayValue('');
        } else {
            setDisplayValue((prevValue) => prevValue + value);
        }


        //setDisplayValue(value)
    };

    const evalExpression = (expression) => {
        // Use a regular expression to remove any non-numeric characters
        //console.log(expression);
        //const cleanExpression = eval(expression);
        const cleanExpression = expression.replace(/[^0-9+\-*/.]/g, '');
        //console.log(cleanExpression);
        // Perform the calculation using the JavaScript built-in function 'eval'
        return eval(cleanExpression);
    };

    return (
        <content>
            <div className="calculator">
                <div className="display">{displayValue}</div>
                <div className="buttons">
                    <button onClick={() => handleButtonClick('7')}>7</button>
                    <button onClick={() => handleButtonClick('8')}>8</button>
                    <button onClick={() => handleButtonClick('9')}>9</button>
                    <button onClick={() => handleButtonClick('+')}>+</button>
                    <button onClick={() => handleButtonClick('4')}>4</button>
                    <button onClick={() => handleButtonClick('5')}>5</button>
                    <button onClick={() => handleButtonClick('6')}>6</button>
                    <button onClick={() => handleButtonClick('-')}>-</button>
                    <button onClick={() => handleButtonClick('1')}>1</button>
                    <button onClick={() => handleButtonClick('2')}>2</button>
                    <button onClick={() => handleButtonClick('3')}>3</button>
                    <button onClick={() => handleButtonClick('*')}>*</button>
                    <button onClick={() => handleButtonClick('0')}>0</button>
                    <button onClick={() => handleButtonClick('.')}>.</button>
                    <button onClick={() => handleButtonClick('=')}>=</button>
                    <button onClick={() => handleButtonClick('C')}>C</button>
                    <button onClick={() => handleButtonClick('/')}>/</button>
                </div>
            </div>
        </content>
    );
};

export default Calculator;
