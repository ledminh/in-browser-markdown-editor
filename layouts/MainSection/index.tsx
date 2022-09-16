import { FunctionComponent } from "react";
import SectionTitle from "./SectionTitle";

type SectionType = 'EDITOR' | 'PREVIEW';

const MainSection:FunctionComponent<{children:JSX.Element, section:SectionType}> = ({children, section}) => {

    return (
        <>
            <SectionTitle title={section==='EDITOR'? 'MARKDOWN': 'PREVIEW'}/>
            {children}
        </>
    )

}

export default MainSection;