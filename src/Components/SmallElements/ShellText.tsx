import {useState, useEffect} from 'react';

export default function ShellText({text, duration}: { text: string, duration: number }) {
    const [typedText, setTypedText] = useState('');
    const interval = duration / text.length;

    useEffect(() => {
        const typeout = setInterval(() => {
            if (typedText.length < text.length) {
                setTypedText((prevTypedText) => prevTypedText + text[prevTypedText.length]);
            } else {
                clearInterval(typeout);
            }
        }, interval);
        return () => clearInterval(typeout);
    }, [typedText, interval, text.length]);

    return (
        <p className={"shell-text"}>
            {typedText}
            <span className="blinking-cursor">|</span>
        </p>
    );
}