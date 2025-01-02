import { Canvas,useFrame} from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera,Environment } from "@react-three/drei";

import Barrel from "../../../public/3d_model/wine_barrel/Barrel.jsx";

import { Suspense, useRef } from "react";

function RotatingModel({Component}){
    const ref=useRef();
    useFrame(()=>{
        if(ref.current){
            ref.current.rotation.y+=0.003;
        }
    })
    return <group ref={ref}><Component/></group>
}

const WineSellar = () => {
    return <div className="flex flex-col gap-20 md:flex-row md:justify-between items-center">
       <section className="flex flex-col text-center md:text-left gap-5 max-w-[600px]">
       <h1 className="font-Almendra text-6xl text-customBrown">Better Taste With Older Barrels</h1>
       <p className="font-Baskerville text-base text-[#9E845C] ">We specially pour wine from older barrels into new bottles to create a unique and authentic wine experience. We have very old barrels some of them are over 100 years old</p>
       </section>
        
    <Canvas style={{height:"350px"}}>
     <PerspectiveCamera makeDefault position={[100,100,120]}/>
     <Suspense fallback={"Loading..."}>
     <RotatingModel Component={Barrel} />
     </Suspense>
     <OrbitControls enableZoom={false}/>
     <Environment preset="dawn" />
    </Canvas>

    </div>
}

export default WineSellar;