import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Convert = ({ language, input }) => {

    const [translated, setTranslated] = useState('')
    const [debouncedInput, setDebouncedInput] = useState(input)

    useEffect(() => {
        const timerid = setTimeout(() => {
            setDebouncedInput(input)
        }, 700)
        
        return () => {
            clearTimeout(timerid);
        }
    }, [input])

    useEffect(() => {
        const translatedText = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params : {
                    q: debouncedInput,
                    target: language.value,
                    key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
                }
            })
            setTranslated(data.data.translations[0].translatedText)
        }
        translatedText();
    }, [language, debouncedInput])
    return (
        <div>
            <h1>{translated}</h1>
        </div>
    )
}

export default Convert