"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";

const TopList = () => {
    const [
        htmlCODE, setHTMLCODE
    ] = useState<string>("");

    useEffect(() => {
        const referrer = encodeURIComponent(document.referrer);
        const title = encodeURIComponent(document.title);
        const url = encodeURIComponent(window.location.href);
        const width = screen.width;
        const height = screen.height;
        const colorDepth = screen.colorDepth;

        setHTMLCODE(`
            <a href="https://www.toplist.cz" title="TOPlist" target="_blank">
                <img 
                src="https://toplist.cz/count.asp?id=953581&logo=mc&http=${referrer}&t=${title}&l=${url}&wi=${width}&he=${height}&cd=${colorDepth}" 
                width="88" 
                height="60" 
                border="0" 
                alt="TOPlist" 
                />
            </a>
        `);
    }, []);

    return (
        <Fragment>
            <noscript>
                <a href="https://www.toplist.cz" title="TOPlist">
                    <img 
                    src="https://toplist.cz/count.asp?id=953581&logo=mc&njs=1" 
                    width="88" 
                    height="60" 
                    alt="TOPlist" 
                    />
                </a>
            </noscript>
            <div dangerouslySetInnerHTML={{
                __html: htmlCODE
            }}></div>
        </Fragment>
    );
};

export default TopList;