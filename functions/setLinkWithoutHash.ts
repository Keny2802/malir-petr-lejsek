const setLinkWithoutHash = (evt: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    evt.preventDefault();

    const targetLink = document.getElementById(id);

    if (targetLink) {
        targetLink.scrollIntoView({
            behavior: "instant"
            // block: "start"
        });
    };
};

export default setLinkWithoutHash;