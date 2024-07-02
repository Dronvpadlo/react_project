import {useState} from "react";

export const useToggle = (status : boolean) => {
    const [toggle, setToggle] = useState<boolean>(status)
    const handleToggle = () => setToggle(prevState => !prevState);
    return {toggle, handleToggle};


}