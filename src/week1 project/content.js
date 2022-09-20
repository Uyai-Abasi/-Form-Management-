import Nav from "./navbar";
import Sidebar from "./sidebar";
import Section from "./section";
const Content = () => {
 
    return (

        <>
        <Nav/>
        <div style={{display:"flex",gap:"20px"}}>
        <Sidebar />
<Section/>
</div>

        </>
      );
}
 
export default Content ;