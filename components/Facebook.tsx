import {
    Fragment
} from "react";

const Facebook = () => {
    return (
        <Fragment>
            <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofimalby%2F%3Flocale%3Dcs_CZ&tabs=timeline&width=400&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="400"
            height="500"
            style={{
                border: "none",
                overflow: "hidden",
                maxWidth: "100%",
                margin: "0 auto"
            }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </Fragment>
    );
};

export default Facebook;