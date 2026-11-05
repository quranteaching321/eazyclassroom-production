import ScrollToTop from "@/components/common/scroll-to-top";
import Terms from "@/components/terms";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
    title: "Terms of Serivce - Eacyclassroom.Net", 
};

const index = () => {
    return (
        <Wrapper>
            <Terms />
            <ScrollToTop />
        </Wrapper>
    );
};

export default index;