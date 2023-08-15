import { useState } from "react";

const useBooleanToggle = (initialMod) => {
    const [val, setValueHandler] = useState(initialMod);

    const toggleMode = e => {
      e.preventDefault();
      setValueHandler(!val);
    };
    
    return [val, toggleMode]
}

export default useBooleanToggle;