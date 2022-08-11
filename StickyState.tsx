import React from 'react'



function useStickyState<Type>(defaultValue: Type, key: string) {
    const [value, setValue] = React.useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });

    React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
      }, [key, value]);
      return [value, setValue];
    }

export default useStickyState


  //  const [theme,setTheme]= useStickyState('',"theme")
