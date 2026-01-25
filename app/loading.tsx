import { Theme, Box } from "@radix-ui/themes";
import * as Progress from "@radix-ui/react-progress";
import "./loading.css"
export default function Loading() {
    return (
        <Theme appearance="dark" accentColor="yellow">
            <Box  style={{
                height: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
            }}>

            <Box className="duck">
                    <img src="icon.svg" className="logo" />
            </Box>

                    <Box style={{ paddingBottom: "48px", display: "flex", justifyContent: "center"}}>
                <div style={{ width: "24rem" }}>
                    <Progress.Root className="bar">
                        <div className="bar-slide"/>
                    </Progress.Root>
                </div>
            </Box>
            </Box>
        </Theme>
    );
}
