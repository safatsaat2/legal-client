import { Button } from "@mui/material";

const Home = () => {
    return (
        <div >
            <p className="text-6xl text-btn font-para">Hi I am Home</p>
            <Button className="text-btn" disableElevation>
                Disable elevation
            </Button>
        </div>
    );
};

export default Home;