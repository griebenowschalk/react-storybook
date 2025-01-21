import { useState } from "react";
import { FaStar } from "react-icons/fa";

import "./Rating.css";

export interface RatingProps {
    numberOfStars: number;
}

function Rating(props: RatingProps) {
    const [selectedStars, setSelectedStars] = useState(-1);

    function star(key: number, selected: boolean, onSelect: () => void): JSX.Element {
        return (
            <FaStar
                key={key}
                className="star"
                color={selected ? "red" : "grey"}
                onClick={onSelect}
            />
        );
    }

    return [...Array<number>(props.numberOfStars)].map((_, i) => {
        return star(i, i < selectedStars, () => setSelectedStars(i + 1))
    });
}

export default Rating;