import AboutHeader from "../../components/About-us/AboutHeader"
import OurVision from "../../components/About-us/OurVision"
import OurMission from "../../components/About-us/OurMission"
import OurJourney from "../../components/About-us/OurJourney"
import OurAchievements from "../../components/About-us/OurAchievements"
import LetsConnect from "../../components/About-us/LetsConnect"

const page = () => {
    return (
        <>
            <AboutHeader />
            <OurVision />
            <OurMission />
            <OurJourney />
            <OurAchievements />
            <LetsConnect />
        </>
    )
}
export default page