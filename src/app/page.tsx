import HomeFour from "@/components/homes/home";
import ScrollToTop from "@/components/common/scroll-to-top";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
  title: "EazyClassroom - The All-in-One Virtual Classroom Management System",
};

const index = () => {
  return (
    <Wrapper>
       <HomeFour />
       <ScrollToTop style={false} />
    </Wrapper>
  );
};

export default index;