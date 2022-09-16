import { FunctionComponent } from "react"

const SideMenu:FunctionComponent = () => {

    return (
        <>
            <h1>MARKDOWN</h1>
            <h2>MY DOCUMENTS</h2>
            <button>+ New Document</button>
            <div>
                <div>IM</div>
                <span>01 April 2022</span>
                <span>untitled-document.md</span>
            </div>
            <div>
                <div>IM</div>
                <span>01 April 2022</span>
                <span>welcome.md</span>
            </div>
            <div>Switch theme</div>
        </>
    )
}

export default SideMenu;