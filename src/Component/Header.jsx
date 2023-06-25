
const Header = ({heading, subHeading}) => {
    return (
        <div className="text-center mt-24 mb-11">
            <h1 className="font-header font-bold text-color text-5xl mb-3">{heading}</h1>
            <p className="w-[431px] mx-auto font-para text-sm text-sec-col">{subHeading}</p>
        </div>
    );
};

export default Header;