import ScrollToTop from "@/components/common/scroll-to-top";
import Privacy from "@/components/privacy";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
    title: "Privacy Policy - Eacyclassroom.Net", 
};

const index = () => {
    return (
        <Wrapper>
            <Privacy />
            <ScrollToTop />
        </Wrapper>
    );
};

export default index;