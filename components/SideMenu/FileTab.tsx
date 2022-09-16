import { FunctionComponent } from "react";


const FileTab:FunctionComponent<{date:string, filename:string}> = ({date, filename}) => {

    return (
        <div>
            <div>IM</div>
            <span>{date}</span>
            <span>{filename}</span>
        </div>
    );
}

export default FileTab;