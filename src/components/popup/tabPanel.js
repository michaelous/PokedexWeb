import {Box} from "@material-ui/core";

export default function TabPanel(props) {
    const {children, value, index} = props;

    return (
        <>
            {value === index && (
                <Box className={"tabPanel"}>
                    {children}
                </Box>
            )}
        </>
    );
}
