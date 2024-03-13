import { useState } from "react";
import { Button } from "@/components/button/Button";

export interface CounterProps {
    color?: string
}

function Counter(props: CounterProps) {
    const { color } = props;
    const [count, setCount] = useState(0);

    const handleOnClick = (event?: string) => {
        if (event === "ADD") {
            setCount(count + 1);
            return;
        }
        setCount(count - 1);
    };

    return (
        <>
            <span style={{ color }}>Counter: {count}</span> <br />
            <Button label="+" onClick={() => handleOnClick("ADD")} backgroundColor="#28860B" />
            <Button label="-" onClick={() => handleOnClick()} backgroundColor="#28860B" />
        </>
    );
}

export default Counter;