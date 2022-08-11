import React, { useEffect, useState } from 'react'
import useStickyState from '../Hooks/StickyState'

const Switcher = ()=>{

    //const [theme,setTheme] = useState<string>('')

    const [theme,setTheme]= useStickyState('',"theme")


    useEffect(()=>{
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    },[])

    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    },[theme])

    const handleThemeSwitch= ()=> {
        setTheme(theme === 'dark'? 'light':'dark')
    }
   

    return (
            <div>
            <button
            type='button'
            onClick={handleThemeSwitch}
            className='fixed z-10 right-2 top-2 bg-indigo-500 dark:bg-[#395B64] text-lg p-2 rounded-lg  hover:translate-y-1 transition duration-300 active:scale-[1.3] active:transition active:duration-75 items-center'
            //className="button button--moema px-5 py-3 bg-gray-800 hover:bg-gray-700 hover:text-white text-gray-300 block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest fixed z-10 right-2 top-2"
            >
                {/*theme === 'dark'? '🌕':'☀️'*/} 
                <img src={theme === 'dark'? 'https://www.svgrepo.com/show/79251/crescent-moon.svg':'https://www.svgrepo.com/show/28382/sun.svg'} alt=""  className='h-5 w-5 fill-black'/>
            </button>
           
            </div>
    )
}

export default Switcher

//https://www.svgrepo.com/show/28382/sun.svg
//https://www.svgrepo.com/show/79251/crescent-moon.svg

/**
 * Switch dark mode for tailwindcss
 * 
 * add: darkMode:'class'
 * 
 * into tailwind.config.cjs
 * 
 */
