import { FunctionComponent } from "react";
import SectionTitle from "../../components/SectionTitle";

const MainSection:FunctionComponent<{children:JSX.Element}> = ({children}) => {

    return (
        <>
            <SectionTitle/>
            {children}
        </>
    )

}

export default MainSection;