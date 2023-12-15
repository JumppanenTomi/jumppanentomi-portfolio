import {ReactNode, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

interface ShellTextProps {
    children?: ReactNode;
    duration: number;
}

export default function ShellText(props: ShellTextProps) {
    const {i18n} = useTranslation();

    const {children, duration} = props;
    const [typedText, setTypedText] = useState('');
    const text = children ? children.toString() : "";
    const interval = duration / text.length;

    // Reset the typed text when language changes
    useEffect(() => {
        setTypedText('');
    }, [i18n.language]);

    // Start "typing" the new text
    useEffect(() => {
        const typeout = setInterval(() => {
            if (typedText.length < text.length) {
                setTypedText(prevTypedText => prevTypedText + text[prevTypedText.length]);
            } else {
                clearInterval(typeout);
            }
        }, interval);

        // Cleanup function
        return () => {
            clearInterval(typeout);
        };
    }, [i18n.language, typedText, interval, text, setTypedText]); // note that I added `i18n.language` here

    return (
        <div className="shell-text">
            <p className={"shell-prefix"}>~$ sudo hello-world</p>
            {typedText}
            {text.length - typedText.length === 0 && (
                <p className={"shell-prefix"}>{"~$"}<span className="blinking-cursor">|</span></p>
            )}
        </div>
    );
}