import NavGuide from "../components/NavGuide/NavGuide";

export default function HomePage() {
    return (
        <>
            <NavGuide></NavGuide>
            <span style={{position: 'absolute', top: '40px', left: '230px'}}>
                <img style={{height: '56px', width: '112px'}} src="/blimp_cover_norm_web.png"/>
            </span>
            <span style={{position: 'absolute', top: '400px', left: '70px'}}>
                <img style={{height: '56px', width: '112px'}} src="/blimp_reversed_cover_norm_web.png"/>
            </span>
            <span style={{position: 'absolute', top: '230px', left: '500px'}}>
                <img style={{height: '56px', width: '112px'}} src="/blimp_cover_norm_web.png"/>
            </span>
            <span style={{position: 'absolute', top: '500px', left: '192px'}}>
                <img style={{height: '56px', width: '112px'}} src="/blimp_cover_norm_web.png"/>
            </span>
            <span style={{position: 'absolute', top: '50px', left: '192px'}}>
                <img style={{height: '56px', width: '56px'}} src="/crunch_norm_right_web.png"/>
            </span>
        </>
    )
}