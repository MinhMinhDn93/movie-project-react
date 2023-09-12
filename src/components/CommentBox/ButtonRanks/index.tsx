import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import './ButtonRanks.css'

function ButtonRanks() {
    const stars = [1, 2, 3, 4, 5];

    const [current, setCurrent] = React.useState(0);

    console.log('current', current);

    const handleClick = (number: number) => {
        //console.log(number);
        if (number === current) {
            setCurrent(0);
        } else {
            setCurrent(number);
        }

    }

    return (
        <div className="buttonrank">
            {
                stars.map((index) => {
                    console.log(index);
                    if (index > current) {
                        return <div>
                            <AiOutlineStar onClick={() => handleClick(index)} key={index} />
                        </div>

                    } else {
                        return <div>
                            <AiFillStar onClick={() => handleClick(index)} key={index} />
                        </div>


                    }
                })
            }
        </div>
    )
}
export default ButtonRanks;