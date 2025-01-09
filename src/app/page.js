import Image from "next/image";
import Our_Partners from "./components/Our_Partners";
import Insurances from "./components/Insurances";
import Why_Choose from "./components/Why_Choose";
import Experts from "./components/Experts";
import Contact from "./components/Contact";
import Homee from "./components/Homee";
import Unique from "./components/Unique";
export default function Home() {
 return(
 <div className="overflow-hidden">
    <Homee/>
    <Our_Partners/>
    <Insurances/>
    <Why_Choose/>
    <Unique/>
    <Experts/>
    <Contact/>
    </div>
);}
